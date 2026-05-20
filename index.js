export default {
  async fetch(request) {
    const userAgent = request.headers.get("user-agent") || "";
    const ip = request.headers.get("cf-connecting-ip") || "";

    const botUAs = [
      'facebookexternalhit', 'facebot', 'facebookbot',
      'adsbot', 'googlebot', 'bingbot', 'twitterbot',
      'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
      'crawler', 'spider', 'headless', 'phantom', 'python',
      'curl', 'wget', 'java/', 'apache-httpclient'
    ];

    const metaIPs = [
      '66.220.', '69.63.', '69.171.', '173.252.',
      '31.13.', '157.240.', '179.60.', '204.15.'
    ];

    const isBot = botUAs.some(b => userAgent.toLowerCase().includes(b));
    const isMeta = metaIPs.some(p => ip.startsWith(p));

    if (isBot || isMeta) {
      return new Response(null, {
        status: 302,
        headers: { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' }
      });
    }

    const numeros = [
      "5575936181385", // T28
      "5575936181382", // T48
      "5575936181374", // T41
      "5575936181397", // T46
      "5575936181377", // T49
      "5575936181378", // T50
      "5575936181054", // T51
      "5575936181401", // T52
    ];

    const mensagens = [
      "Fala Jota, me envia a boa de hoje, quero acessar agora!",
      "E ai JP, manda a boa pra mim que quero acessar!",
      "Jotap, libera a boa de hoje, quero acessar tambem!",
      "Fala irmao, quero acessar a boa de hoje!",
      "E ai Jota, me manda a boa porque quero acessar!",
      "JP, envia a boa de hoje pra eu acessar!",
      "Jotap, quero acessar a boa de hoje, me envia ai!",
    ];

    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    const mensagem = encodeURIComponent(
      mensagens[Math.floor(Math.random() * mensagens.length)]
    );

    const url = /Android|iPhone|iPad/i.test(userAgent)
      ? `whatsapp://send?phone=${numero}&text=${mensagem}`
      : `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;

    return new Response(null, {
      status: 302,
      headers: { Location: url },
    });
  },
};
