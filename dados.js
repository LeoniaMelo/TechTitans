let dados = [
    {
      "titulo": "Sundar Pichai",
      "descricao": "CEO da Alphabet (Google), comanda o gigante da busca, IA, plataformas online e tecnologias inovadoras, moldando a interação humana com a informação e o mundo digital.",
      "link": "https://pt.wikipedia.org/wiki/Sundar_Pichai",
      "tags": "google alphabet IA busca online"
    },
    {
      "titulo": "Elon Musk",
      "descricao": "CEO da Tesla e SpaceX, revoluciona a indústria automobilística com carros elétricos autônomos e lidera a corrida espacial privada, impactando a mobilidade e a exploração espacial.",
      "link": "https://pt.wikipedia.org/wiki/Elon_Musk",
      "tags": "tesla spacex carros elétricos espaço"
    },
    {
      "titulo": "Satya Nadella",
      "descricao": "CEO da Microsoft, lidera a gigante tecnológica em áreas como computação em nuvem (Azure), inteligência artificial e softwares, impulsionando a transformação digital global.",
      "link": "https://pt.wikipedia.org/wiki/Satya_Nadella",
      "tags": "microsoft azure nuvem software IA"
    },
    {
      "titulo": "Tim Cook",
      "descricao": "CEO da Apple, comanda a gigante de tecnologia com produtos icônicos como iPhone, iPad e Mac, influenciando design, interface e tendências de consumo.",
      "link": "https://pt.wikipedia.org/wiki/Tim_Cook",
      "tags": "apple iphone ipad mac design"
    },
    {
      "titulo": "Mark Zuckerberg",
      "descricao": "CEO da Meta (Facebook, Instagram, WhatsApp), comanda a maior plataforma social, moldando a comunicação, o consumo de informação e o debate público global.",
      "link": "https://pt.wikipedia.org/wiki/Mark_Zuckerberg",
      "tags": "meta facebook instagram whatsapp redes sociais"
    },
    {
      "titulo": "Bill Gates",
      "descricao": "Co-fundador da Microsoft, filantropo e investidor em tecnologias inovadoras, impacta desde o desenvolvimento de softwares até a busca por soluções para desafios globais.",
      "link": "https://pt.wikipedia.org/wiki/Bill_Gates",
      "tags": "microsoft filantropia tecnologia software"
    },
    {
      "titulo": "Jeff Bezos",
      "descricao": "Fundador da Amazon, revolucionou o comércio eletrônico e a computação em nuvem (AWS), expandindo para áreas como entretenimento e impulsionando a transformação digital.",
      "link": "https://pt.wikipedia.org/wiki/Jeff_Bezos",
      "tags": "amazon ecommerce nuvem aws"
    },
    {
      "titulo": "Andy Jassy",
      "descricao": "CEO da Amazon Web Services (AWS), lidera a maior plataforma de computação em nuvem do mundo, impulsionando a transformação digital de empresas e governos.",
      "link": "https://pt.wikipedia.org/wiki/Andy_Jassy",
      "tags": "aws nuvem amazon"
    },
    {
      "titulo": "Jensen Huang",
      "descricao": "CEO da NVIDIA, líder no desenvolvimento de GPUs, impulsionando áreas como inteligência artificial, jogos e computação de alto desempenho.",
      "link": "https://pt.wikipedia.org/wiki/Jensen_Huang",
      "tags": "nvidia gpu jogos inteligência artificial"
    },
    {
      "titulo": "Reed Hastings",
      "descricao": "Co-fundador e Co-CEO da Netflix, revolucionou a indústria do entretenimento com streaming online, moldando o consumo de conteúdo audiovisual global.",
      "link": "https://pt.wikipedia.org/wiki/Reed_Hastings",
      "tags": "netflix streaming entretenimento"
    },
    {
      "titulo": "Lisa Su",
      "descricao": "CEO da AMD, lidera a empresa na produção de CPUs e GPUs, rivalizando com a Intel e impactando o desenvolvimento de computadores e data centers.",
      "link": "https://pt.wikipedia.org/wiki/Lisa_Su",
      "tags": "amd cpu gpu"
    },
    {
      "titulo": "Zhang Yiming",
      "descricao": "Fundador da ByteDance, empresa por trás do TikTok, revolucionou o consumo de vídeos curtos e influenciou a comunicação e o entretenimento global.",
      "link": "https://en.wikipedia.org/wiki/Zhang_Yiming",
      "tags": "bytedance tiktok vídeos"
    },
    {
      "titulo": "Pony Ma (Ma Huateng)",
      "descricao": "Fundador e CEO da Tencent, gigante tecnológica chinesa,  com plataformas como WeChat, impactando comunicação, pagamentos e jogos na China e globalmente.",
      "link": "https://pt.wikipedia.org/wiki/Pony_Ma",
      "tags": "tencent wechat jogos china"
    },
    {
      "titulo": "Jack Ma",
      "descricao": "Fundador do Alibaba, gigante do comércio eletrônico chinês, revolucionou o varejo online e a logística, influenciando o consumo global e a economia digital.",
      "link": "https://pt.wikipedia.org/wiki/Jack_Ma",
      "tags": "alibaba ecommerce china"
    },
    {
      "titulo": "Susan Wojcicki",
      "descricao": "CEO do YouTube (Google), lidera a maior plataforma de vídeos do mundo, moldando o consumo de conteúdo, a produção audiovisual e a comunicação digital.",
      "link": "https://pt.wikipedia.org/wiki/Susan_Wojcicki",
      "tags": "youtube google vídeos"
    },
    {
      "titulo": "Shantanu Narayen",
      "descricao": "CEO da Adobe Systems, lidera a empresa em software de design, edição e criatividade, impactando a produção de conteúdo digital e a comunicação visual.",
      "link": "https://en.wikipedia.org/wiki/Shantanu_Narayen",
      "tags": "adobe design software"
    },
    {
      "titulo": "Marc Benioff",
      "descricao": "CEO da Salesforce, pioneiro em computação em nuvem para empresas (CRM), moldando a gestão de clientes e a transformação digital de negócios globalmente.",
      "link": "https://pt.wikipedia.org/wiki/Marc_Benioff",
      "tags": "salesforce crm nuvem"
    },
    {
      "titulo": "Safra Catz",
      "descricao": "CEO da Oracle, lidera a gigante de softwares corporativos, banco de dados e computação em nuvem, impactando a infraestrutura tecnológica de empresas e governos.",
      "link": "https://en.wikipedia.org/wiki/Safra_Catz",
      "tags": "oracle banco de dados nuvem"
    },
    {
      "titulo": "Evan Spiegel",
      "descricao": "CEO do Snapchat, revolucionou a comunicação digital com mensagens efêmeras, influenciando a forma como jovens interagem e consomem conteúdo online.",
      "link": "https://pt.wikipedia.org/wiki/Evan_Spiegel",
      "tags": "snapchat mensagens"
    },
    {
      "titulo": "Meg Whitman",
      "descricao": "Ex-CEO do HP e eBay, investidora em startups de tecnologia e líder empresarial, com forte influência no Vale do Silício e no cenário tecnológico global.",
      "link": "https://pt.wikipedia.org/wiki/Meg_Whitman",
      "tags": "hp ebay startups"
    }
  ];
