<?php
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function responder($codigo, $sucesso, $mensagem) {
    http_response_code($codigo);
    echo json_encode([
        'success' => $sucesso,
        'message' => $mensagem
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    responder(405, false, 'Use o formulário do site.');
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 16384) {
    responder(413, false, 'Dados acima do limite.');
}

$origem = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origem !== 'https://lightblue-tiger-255149.hostingersite.com') {
    responder(403, false, 'Origem não autorizada.');
}

$dados = json_decode(file_get_contents('php://input'), true);
if (!is_array($dados)) {
    responder(400, false, 'Dados inválidos.');
}

if (!empty($dados['botcheck'])) {
    responder(400, false, 'Envio inválido.');
}

$campos = [
    'nome' => 150,
    'email' => 254,
    'tel' => 30,
    'crm' => 40,
    'esp' => 150
];

foreach ($campos as $campo => $limite) {
    $valor = $dados[$campo] ?? null;
    if (!is_string($valor)) {
        responder(422, false, 'Preencha todos os campos.');
    }
    $dados[$campo] = trim($valor);
    if ($dados[$campo] === '' ||
        mb_strlen($dados[$campo], 'UTF-8') > $limite) {
        responder(422, false, 'Confira os campos preenchidos.');
    }
}

if (!filter_var($dados['email'], FILTER_VALIDATE_EMAIL)) {
    responder(422, false, 'Informe um e-mail válido.');
}

try {
    $config = require dirname(__DIR__) . '/issca-config.php';

    $pdo = new PDO(
        "mysql:host={$config['host']};dbname={$config['banco']};charset=utf8mb4",
        $config['usuario'],
        $config['senha'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );

    $consulta = $pdo->prepare(
        'INSERT INTO interessados
        (nome, email, whatsapp, crm_uf, especialidade)
        VALUES (?, ?, ?, ?, ?)'
    );

    $consulta->execute([
        $dados['nome'],
        $dados['email'],
        $dados['tel'],
        $dados['crm'],
        $dados['esp']
    ]);

    responder(201, true, 'Cadastro salvo com sucesso.');
} catch (Throwable $erro) {
    responder(500, false, 'Não foi possível salvar. Tente novamente.');
}