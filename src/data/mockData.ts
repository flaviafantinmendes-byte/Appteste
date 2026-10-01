import { Lesson, Artwork, Achievement, AppSettings } from '../types';

export const APP_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1VOb2s_w2lJBZ8MT1EvjomMbZK8zJTiUGpJSpBt2kAWCQ4iAN0-yGTmNCgChSg8Q3U_Y1z76RgMEuCc6F1W0ZniW54wttULMCXdJzmq05SmQaWJs-Xu56fwwgEXwzG7-LfwkMlfg8_mAR_1IhEocpgb7IaaQALYnXlLoVs8ZtiHa3o7u1o_m1FZMSDQNLlaOFGlmCgplnS2JyL50hXhbUPUBpdNipFSvJKnj5XUI0WR2Vd4bMEq3qVJPV3m',
  avatar: 'https://lh3.googleusercontent.com/aida/AEtjO1WUieEJQBuYY6r9TeRp-NscTA05UHleJ5zMgqS4XhcXozrNPZ6B3rFh6ipALzIq8Ap1eV_zWBWPVut-PL2ooRH24J-D8s86i23a0RRtVeqDSQQ8ROW_-kiZ8Jd4ic-u5pouNW-XhyJB1bDiHbCza9-oRmUGweCfO4xc5G-3S3LC6Ym5VMT8jLfPpUZFoUfM-zrbSjr7BT3WXBWwl6xZOmdsNy8zpjlE5BWzcS0bEJTBVg2oTmo0Vz5wATQ',
  catCover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGojywdweOI6M8twXJ1ItmzpOo0pGNZ7KqfzMRjsBXTXM53RC8ci94Yol04qIR9w_3S5KoUx_6EWrgLok14QjNL3zhVUWE16qSrlujCED3QNHECYuulac0iq79ebh8szsOEwoejQgwgWpW0cGFshcbFSAitDVO0kvVrjO1fXt68J8HfmkoCEiAqsqylpVyqwgYPeXudy_jphintJpQtWtCoQuK3ioaXGYTvaJjA4NVNIaP3jwxJezcWw',
  eyeCover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDegAZkOsa9UrLqztpQLTU9iRsLZg2XXPmAnjoBl43vCNNmQb5KHuo8LNkhnogNb_o8pBFqlo0Dh5b5eVRaa_A2LG88DEZtDpVrDsGYmbpc7_6npmlHo8y4z3rSdphqKY9faBvNfQqDn-mDpxiNf9A8QYRlP5cNkU_3lNC0OcFnQ45ysqULl3aTmrvaBELc3FmH1qidB4PCBC_AU1CG0HpzGhjOeI7Dp8-8sCY6l4PTT0xdYrAHmgJNDA',
  mangaCover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa5eQnoShSbkOgAdpyZCJtPxNjfr-rERdfKASeqI7YQn0X9OkO5m9hs6bg1o6UyianX8q2L4k9x0-b9tFYsm_ILRD37WaoND7ZI_ThdfyHi6hh9wd_xWrxjVgb1u8t3ciYseRngwTxbYoLDSnA4CkmHhhvwQJy9b0VuQCd7ABJntzde8y66sxnJzCwRr7OOEPAfgk6Jf1TG3OiA8HpOB4qelyXOYoH37WyOQBcYv7ZeBL1lbIWjSL4ZQ',
  shadingCover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvz36oJ0ASfMO2j40W5RapSRRhB3RJGugYPTp2vqzsjPr0k9E5RF5KDal2MYM2kJcnU_ZmN2emZxHe9r46Y3ODSWZ7EpJmY3hqAK-y5wcuuyUPWOUZqkQW8NjWfC5PhpDA25Dat7520p1Nwylfz7QeCkyoTaNJvipm28hZc94P4FLgwGxYOQv6Y0x1OjPl822lCexad_SidBFo98tIF2BfpKYIZO_3rC678H1L5OlhLEsOHEevI0bv5A',
  
  // Step by step eye stages
  step1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkVYZ3j2a4bIBFCTIunsB7JMXgIZ6e5rI7BQgrnfWEqIKrx-LSrDFRuvGNjVc8yr75ab4jS_V3FcZ07AQwmSjVBmZfQalNarUJGqyXzHTkqom-Nrb5PTo19L4cxGZiuoMXXfW2tpEskhbMOeEjfENHBBbP0rvmwIB9eijQ0cQOieKyIq3BbHGW7RlykxX3ES0XfiIruKfFgLRK6Xi4v9h3fDO51AxpOlw2u74ayAF5ekoQQ-9QvGvNjg',
  step2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVdKuEVOlVqzht2_lBun1Hrh20RQOJdogHrs7q8EJViWc25ojububz7pjdMaxMvHXE-TXuJJFcMVoIbnUrqgDyP-apIW-FyLoNaBXucPR8B2uuSGHzWNSlhOO3listn6QAHP2za8Fm4mqg_BvKYDlCNUp7rGlh6Rozm4QwILL9L5cvFjv7yfkGEIyl-xV2w9Qrx77xT7rN0tjsbcmyFbX34Y-Eu1iK5ZqZ_QgzZCfOWUEr3nHqVNPoyw',
  step3Main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHGJyGkgkqqxQLPPy8x1qICpgAkelmp1W5e2AWGe1DXJklwZMjK9xu-GnkD5p8-SMTxfyuP9FtykXFIuPwtzDQakF5SzzG1MFpGnEZ-a8yBuUtTPzSlA5xxI4_wB5fuSDsvlJUzdg97aI9j_MYQC2U_16FoLwQ38XNWXks7oSlMdg_lQNC0uTeD3Hx2G389XxPZAQNH_nPlRdw_uTitJgZ8i5jAY2WGmVRHlWacBSJkPrUqCFpCn8W5g',
  step3Thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO3mW-oi_keDFBg2tyJTFpUHpWIzpy4gCJNmwwCsJaU5tnJu6m6SWUWrj5XJQgCvrjgisayDnKKYNefHi2K2uwMndzBQe8u_vL1rBbY48T2XioMmW14wYh8jUHC4oj6-OWWLP-UED3PjQC3F6wqBEQaVDJZtDoPSXNX_8oOXtdRj0jn9PMfw0eNsXZHBW8Nw8FVUux6By0KLaiVjOPQ7nX-OX80dnBsAmuU5D5UQqCGgX_GoiIdoFmXw',
  step4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKU8RNNrYmUDROi8c-VUwZmyDRGrgrrUjlaWwdhSWpf5-dGyO5wB7tMDz8B0Vnfo4Js6dWajBQ9eIKWszUeScSTIQTmPIPlGkBYkV-sLiXCMIXONKy98mQsDVUHx2yP9PP08PdgQMx3UWYqi5J8reTmyHGUY-smPhGSzU8iGyQx9j1BguSG2Y6hEMro5L1Z9gJsGgAks12P1Mh0uTKsRGApv4EYYsMVA2l1Ap3LJGRncoIl6IPAdoAKw',
  step5: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI27AdXvgv9cgGPFHftVq4eR6ph7r_liLnkN10mHdeb6bfH0Q2vhm5SeiAYwF0aZ5htqd3Ttj2z8FirKevCMUkTfyGfNlI5pP5wJu2Xp6CQC9nQG3W5KvpN0GMEXHTC8zKxiSZlJZcUHPfn0razhwfS0BtT42gXWG3T6MV9DFbbXqWaO56sJ5-7Uo0oDwaOfkvMOUFdH3W44MDfj86kJ8jDMfC8HX1UJeWI3Xz9WGZ8f9OA6apkekReQ',
  step6: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7EBiGeNQLy213Cbmeg-Gx8JoKD3nEkQDUMUREBg5l3ZyhX_IXOuP2E_cHOc9bV7trZoxbdIim235WADtohErvP2TD1SH2Iu1pbZuVOT6QZbgCtYlEqun7Er35254jBUP9ktWhisKSc4vg5w3NVZFCUPXiOQg06lIZtj96JEECjhrMsPKoGUMzP-flrK65SM8R8ID-AFPFoAQ-R2w7amg_ibbSmQSfiIZ-gIani0iX9wjRVFyjzUG9vA',

  // Catalog Extra Lessons
  animeEye: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwa5llfcSc-zC2_CEbH7eisuWBwlfKcXuUhttuMxdMDwvh0UwHMKWxqnajxdECXEiRRmUOnx15kziY2QOD8X_ZbOXulH60a64JUzqldWk7lubH-saqhGxQvXgxtgRk7iUBCUge_p-yXPV4kwbdc4wNu5kBWRVUN-ABorudTDWs1w4DUDONvoamSd1EFTdfnCIxcweNw18U9yxDyRTiuSUKG8hRQInAPZeB9uJpenNYuda6L92lSOZaRQ',
  sphere: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7j7Bv8xXChcGUkCXEWqCA43tE-1DHnzu_R09LWlSMO6L2-wpcD_6SeIt9E35zCauCE7iEb8_n2Aj0NoOGOfjXl99-9xmf5rxr06HrdkbHBIa4EjDTnTKXPH3oA0aYcIDe5sD7YUIXhGs9hGXRia9IJhyt18uIIkyOKc8WOXUkvScxrBkHrWDYpV0h_ujnMpfYPP2bmlhaurfv4StjrDjtLPDj2XNzMtzA1u7DtGQtvcW86EVDTC9xow',
  faceAnatomy: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3hdhXS4Ps1cjC7HsW-baAhH3mMdgxmXr4lORcDl_EJ14xbsVPGbsnA2qyWGD3jouABYgk-UwV9h_eZiP1fxfx7qGyQcHUrfMLwqH9F9CvyWRjz8RxooBrb-9BYixMjDB_FRj6fhlpJYRBfAmZUz89eF3X7ubzGf-AOTnNGjkM74Zs_54fGJJS--44TMF2hGhUhPe6xuD1wFmeTTTJAmLbxXW753CHha0qRSDREz191KqIuiEBcVX22g',
  hands: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuYYFnCiImomg3riUQj6eRsHmY7ftIVh46RhMp4JTyBPS4a3MfMpQgyE_jEfNv7KgMwvCptTxYNDMY67AY8GpoEG1GrIhgyTN70Tc96xkA6G2C02rtkvni7Dbz4Uw_L65N_ELBPHnTwjUlaZ00KIesWpUYkj1Rq3M7-L4DeBAe0GbhuryIKSxvnwzKRb6J5j1J5LtuRNe3Xt6QXQUDhd6NgxArqbRTbXi27_qYI_XSIqwYVTvQIVHnJA',
  puppy: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABps0QFYwmGJfpm4Jcuhc6-58xJY4uGflcEGmef4Mlefdj7wBbBI72u1ZFq3qE5RCs78SOUUPgzfKA4WblVCKV0aj4GnTqHdXRk2_2CqZ7_SeaiUMxe8L30PmXKLH7mZfOYZOmuB16nlPtbQiv5LmFc_Jmr1ETFsv7OmAPbM6tdbu8Y8P2bGoPaYmIS4Awh2V1FgROnzLrZU7nWXvXfBj23btPDKJY9zoiix1od_Y9oKely9o-GHcOgQ',
  foliage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn5SGVwSS-EC6sMeRncuepDeRt89bGBYTebpQZ5UFknl628KzRu3OGlEEp1s22lRv0tn2x2jn9UzyGb6UoJraB3QB01HZBDVzGYyhvOIN7OAoy3O9ClShg9izIz3elpXI28ohUU9JyhVgcp0zVn_TdRSVy_2pF13ARz2DmHuOLuqf2oZ7g_H1FidGkoN4NnIhCMONykPzRXAvNJq8k9bQrmtrf8I_yVFpJKyZC4hZXsYoEMrsWsYFRQw',

  // Gallery Works
  galleryEye: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDussE8VqMNDRCKOOnO1NrN7CrfoXvLYnlQRnUlc6M-Kbcmsxr-_TJmkPbryEoo6Fo95hW515BF5RfNwTsYHCQGPWP4frMRmyS_SXz5qQZ87Q5uF6zo6UyqmQPjAP9zO0x-LAOllPZX0sKZASmKOg9pi_D5heT_h_OQj8CAIYgSpPUgySouii-EXkThkq9RTWP5QVGc1tZa66WnQ_TT1GsRfaKRcLf5DUpHsofFcI3Lf4ST0BE8FSB-eQ',
  galleryCat: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsJF70k4eM-C7Z9Ov4x6C0hd-keqPIuV9Vp9-xoivVHWRCsz53GScgZHSaN80ZAhA5FsQjZkoqGCjyanwdO-l_teTg7hIc3HpqHzIP1jj3075aHLAxMxuZPniIf3HUoQh2_ehLBeCVDDsvUV_oXEM-EZ2c_A0sgfbClqKePDLDByqnKb3mdBeAQi-yfcmyuSDR9puiuh4lniqV59Uaoxq0-NTbKK4Y3QXk0_ON7Fw92HXewqfSpc0n5g',
  galleryAnimeGirl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9axvE9d_f3cvukU7N7xExeA8PsF1nP36MPKy3JH7gfSkK-6u5Ekz31sZvhrBk_nddEzDVU0ni8vnGpBohY4BLXp5q1Gvvbo74yvIA22EzlzuYE0Ebn49HMmzG2vjv0V_6_mH6FEYmiSU-QSLqr8hhklUT4LJ5XACxU07jzI4BwoOR-ANPeMBy18JXnys5XHdkrzmEA0kyMGOKt66KPmQu9hNBOLK1r5yDF1_YfyXr33ErUVFfR6TaEQ',
  galleryHands: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2TCQa7qmuWweWOzb3RJ3tfyIPMgdL9ckW10-7xTAI0V1vRHEGQv4VRf6_Jscd4MMQpOv8EG5yPV8X2PGuwTf6RueLeaY3oQ7833vEizKkrkks3R3kF9DvhFoWv7gsbBNSYFt_3Gs5tt4ApCeFoz5B8mwhPeyPRLorjE2vDsS47NyDED9JbhYDYVuufBX1oVj1M_sXTYJU8S_uvzYSigRh0VK1SjQm61F4_p63a0-Z41j9aSdJD37G6Q'
};

export const INITIAL_LESSONS: Lesson[] = [
  {
    id: 'aula-olho',
    title: 'Olho Realista do Zero',
    subtitle: '8 etapas guiadas • Texturas de íris e reflexos de luz',
    level: 'medio',
    durationMinutes: 18,
    stepsCount: 6,
    rating: 5.0,
    category: 'pessoas',
    coverImage: APP_ASSETS.eyeCover,
    isPopular: true,
    steps: [
      {
        stepNumber: 1,
        title: 'Estrutura & Contorno Amendoado',
        description: 'Faça o esboço da forma básica do olho utilizando linhas em arco suaves. Lembre-se de manter o canto interno ligeiramente mais inclinado para baixo.',
        tip: 'Segure o lápis levemente inclinado com traço fino para não marcar o papel antes do acabamento.',
        guideImage: APP_ASSETS.step1,
        thumbnailImage: APP_ASSETS.step1,
        viewModes: {
          current: APP_ASSETS.step1,
          compare: APP_ASSETS.step2,
          final3D: APP_ASSETS.step6
        }
      },
      {
        stepNumber: 2,
        title: 'Pálpebras e Linha D’água',
        description: 'Trace a curvatura da pálpebra superior e a espessura da linha d’água inferior. Essas duas linhas criam a sensação tridimensional do globo ocular.',
        tip: 'A pálpebra superior projeta uma sombra sutil sobre a parte mais alta da esclera branca.',
        guideImage: APP_ASSETS.step2,
        thumbnailImage: APP_ASSETS.step2,
        viewModes: {
          current: APP_ASSETS.step2,
          compare: APP_ASSETS.step3Main,
          final3D: APP_ASSETS.step6
        }
      },
      {
        stepNumber: 3,
        title: 'Posicionando o Círculo da Íris e a Pupila',
        description: 'Agora desenhe um círculo perfeito tocando suavemente a pálpebra superior. Lembre-se de deixar uma pequena esfera em branco no canto superior direito para registrar o ponto de luz focal (reflexo especular).',
        tip: 'Apoie o antebraço firmemente e gire o punho em um arco contínuo e solto para atingir uma curva circular sem travamentos.',
        guideImage: APP_ASSETS.step3Main,
        thumbnailImage: APP_ASSETS.step3Thumb,
        viewModes: {
          current: APP_ASSETS.step3Main,
          compare: APP_ASSETS.step4,
          final3D: APP_ASSETS.step6
        }
      },
      {
        stepNumber: 4,
        title: 'Preenchimento da Pupila & Raios da Íris',
        description: 'Preencha o centro da pupila com grafite mais escuro (6B), preservando o brilho branco. Comece a puxar pequenos raios concêntricos do centro para as bordas.',
        tip: 'Varie a pressão do traço para dar aspecto orgânico e textura viva à íris.',
        guideImage: APP_ASSETS.step4,
        thumbnailImage: APP_ASSETS.step4,
        viewModes: {
          current: APP_ASSETS.step4,
          compare: APP_ASSETS.step5,
          final3D: APP_ASSETS.step6
        }
      },
      {
        stepNumber: 5,
        title: 'Cílios Naturais em Curva Suave',
        description: 'Desenhe os cílios superiores em grupos em formato de "J", partindo da raiz com pressão firme e soltando na ponta com movimento rápido.',
        tip: 'Nunca desenhe cílios como varetas retas: use curvas delicadas que acompanham o volume esférico do olho.',
        guideImage: APP_ASSETS.step5,
        thumbnailImage: APP_ASSETS.step5,
        viewModes: {
          current: APP_ASSETS.step5,
          compare: APP_ASSETS.step6,
          final3D: APP_ASSETS.step6
        }
      },
      {
        stepNumber: 6,
        title: 'Sombreamento Final, Contraste e Volume',
        description: 'Aplique o degradê suave nos cantos do globo ocular e reforce as sombras abaixo da pálpebra para atingir profundidade fotográfica realista.',
        tip: 'Use um esfuminho ou papel macio para suavizar a transição entre luz e sombra profunda.',
        guideImage: APP_ASSETS.step6,
        thumbnailImage: APP_ASSETS.step6,
        viewModes: {
          current: APP_ASSETS.step6,
          compare: APP_ASSETS.step1,
          final3D: APP_ASSETS.step6
        }
      }
    ]
  },
  {
    id: 'aula-gatinho',
    title: 'Gatinho: Esboço Rápido',
    subtitle: '6 etapas guiadas • Formas circulares básicas',
    level: 'facil',
    durationMinutes: 12,
    stepsCount: 6,
    rating: 4.8,
    category: 'animais',
    coverImage: APP_ASSETS.catCover,
    completedSteps: 4,
    progressPercent: 65,
    isPopular: true,
    steps: [
      {
        stepNumber: 1,
        title: 'Círculo Guia da Cabeça',
        description: 'Comece com uma esfera suave e duas linhas cruzadas para marcar a direção do focinho.',
        tip: 'Trace leve como uma pluma: este círculo será apagado ou suavizado depois.',
        guideImage: APP_ASSETS.catCover,
        thumbnailImage: APP_ASSETS.catCover
      },
      {
        stepNumber: 2,
        title: 'Orelhas Triangulares & Queixo',
        description: 'Posicione as duas orelhas no topo com a base ligeiramente curva para dar profundidade.',
        tip: 'A distância entre as orelhas equivale à largura de um olho e meio.',
        guideImage: APP_ASSETS.catCover,
        thumbnailImage: APP_ASSETS.catCover
      },
      {
        stepNumber: 3,
        title: 'Focinho e Nariz Triangular',
        description: 'Coloque o nariz no cruzamento central inferior e esboce a clássica linha em "W" da boca.',
        tip: 'Mantenha o nariz pequeno para dar um aspecto fofo e expressivo.',
        guideImage: APP_ASSETS.catCover,
        thumbnailImage: APP_ASSETS.catCover
      },
      {
        stepNumber: 4,
        title: 'Olhos Grandes com Ponto de Brilho',
        description: 'Desenhe as duas amêndoas dos olhos e as pupilas verticais típicas dos felinos.',
        tip: 'O brilho no olhar traz instantaneamente vida e animação ao desenho.',
        guideImage: APP_ASSETS.catCover,
        thumbnailImage: APP_ASSETS.catCover
      },
      {
        stepNumber: 5,
        title: 'Pelagem Fofa e Bochechas',
        description: 'Faça rabiscos em zigue-zague solto nas laterais do rosto para sugerir pelos macios.',
        tip: 'Varie o comprimento dos traços em torno da bochecha e do queixo.',
        guideImage: APP_ASSETS.catCover,
        thumbnailImage: APP_ASSETS.catCover
      },
      {
        stepNumber: 6,
        title: 'Bigodes Longos & Detalhes Finais',
        description: 'Puxe os bigodes com traço rápido e confiante saindo das almofadinhas do focinho.',
        tip: 'Solte o punho ao desenhar bigodes para obter uma ponta fina e natural.',
        guideImage: APP_ASSETS.catCover,
        thumbnailImage: APP_ASSETS.catCover
      }
    ]
  },
  {
    id: 'aula-manga',
    title: 'Proporção da Cabeça Mangá',
    subtitle: '5 etapas guiadas • O método da cruz e queixo perfeito',
    level: 'facil',
    durationMinutes: 15,
    stepsCount: 5,
    rating: 4.9,
    category: 'anime',
    coverImage: APP_ASSETS.mangaCover,
    isPopular: true,
    steps: [
      {
        stepNumber: 1,
        title: 'Círculo Base e Linha Central',
        description: 'Desenhe um círculo regular e trace a linha vertical guia que vai além da esfera para definir a ponta do queixo.',
        tip: 'Em vista 3/4, a linha do meio deve curvar acompanhando a forma redonda da cabeça.',
        guideImage: APP_ASSETS.mangaCover,
        thumbnailImage: APP_ASSETS.mangaCover
      },
      {
        stepNumber: 2,
        title: 'Mandíbula e Linha do Queixo',
        description: 'Puxe duas diagonais tangenciando a esfera em direção ao ponto inferior do queixo.',
        tip: 'Personagens jovens e fofos têm queixos mais suaves e curtos.',
        guideImage: APP_ASSETS.mangaCover,
        thumbnailImage: APP_ASSETS.mangaCover
      },
      {
        stepNumber: 3,
        title: 'Faixa dos Olhos e Orelhas',
        description: 'Trace a linha dos olhos na metade inferior da esfera. As orelhas ficam alinhadas entre os olhos e o nariz.',
        tip: 'Em estilo anime, os olhos ocupam um espaço maior na face do que na proporção clássica.',
        guideImage: APP_ASSETS.mangaCover,
        thumbnailImage: APP_ASSETS.mangaCover
      },
      {
        stepNumber: 4,
        title: 'Estrutura dos Cabelos em Mechas',
        description: 'Desenhe o cabelo em blocos volumosos flutuando acima da linha do crânio, nunca colado na cabeça.',
        tip: 'Defina um redemoinho central de onde todas as mechas se originam.',
        guideImage: APP_ASSETS.mangaCover,
        thumbnailImage: APP_ASSETS.mangaCover
      },
      {
        stepNumber: 5,
        title: 'Finalização e Expressão',
        description: 'Adicione as sobrancelhas dinâmicas, os brilhos duplos nos olhos e a boca sutil.',
        tip: 'Ajuste a inclinação das sobrancelhas para definir a personalidade alegre ou determinada.',
        guideImage: APP_ASSETS.mangaCover,
        thumbnailImage: APP_ASSETS.mangaCover
      }
    ]
  },
  {
    id: 'aula-sombra',
    title: 'Sombra e Volume com Lápis',
    subtitle: '10 etapas guiadas • Gradientes, hachuras e luz indireta',
    level: 'dificil',
    durationMinutes: 25,
    stepsCount: 6,
    rating: 4.8,
    category: 'fundamentos',
    coverImage: APP_ASSETS.shadingCover,
    isPopular: true,
    steps: [
      {
        stepNumber: 1,
        title: 'Direção da Luz e Ponto Focal',
        description: 'Defina a fonte de iluminação (superior esquerda) e projete as linhas imaginárias de sombra.',
        tip: 'A sombra projetada opõe-se rigorosamente à fonte direta de luz.',
        guideImage: APP_ASSETS.shadingCover,
        thumbnailImage: APP_ASSETS.shadingCover
      },
      {
        stepNumber: 2,
        title: 'Zona de Meio-Tom',
        description: 'Aplique a primeira camada homogênea de hachuras diagonais cobrindo a área que não recebe luz direta.',
        tip: 'Mantenha a mesma inclinação em todas as linhas para criar consistência.',
        guideImage: APP_ASSETS.shadingCover,
        thumbnailImage: APP_ASSETS.shadingCover
      },
      {
        stepNumber: 3,
        title: 'Núcleo da Sombra (Core Shadow)',
        description: 'Identifique e escureça a faixa de transição mais escura do corpo do cilindro e da esfera.',
        tip: 'O núcleo da sombra nunca fica na borda final: há sempre uma luz refletida da mesa.',
        guideImage: APP_ASSETS.shadingCover,
        thumbnailImage: APP_ASSETS.shadingCover
      },
      {
        stepNumber: 4,
        title: 'Luz Refletida de Retorno',
        description: 'Preserve uma faixa mais clara entre o núcleo da sombra e a borda inferior do objeto.',
        tip: 'Essa luz de retorno cria o efeito imediato de tridimensionalidade e solidez.',
        guideImage: APP_ASSETS.shadingCover,
        thumbnailImage: APP_ASSETS.shadingCover
      },
      {
        stepNumber: 5,
        title: 'Sombra de Oclusão e Contato',
        description: 'Crie o ponto mais escuro do desenho exatamente onde a base do objeto toca a mesa.',
        tip: 'Sem essa oclusão escura, o objeto parecerá flutuando no ar.',
        guideImage: APP_ASSETS.shadingCover,
        thumbnailImage: APP_ASSETS.shadingCover
      },
      {
        stepNumber: 6,
        title: 'Gradiente de Sombra Projetada',
        description: 'Estenda a sombra sobre o papel, esfumando suas bordas à medida que se distancia do objeto.',
        tip: 'Bordas mais nítidas perto do objeto e mais difusas longe dele.',
        guideImage: APP_ASSETS.shadingCover,
        thumbnailImage: APP_ASSETS.shadingCover
      }
    ]
  },
  {
    id: 'aula-olho-manga',
    title: 'Olho Estilo Mangá Expressivo',
    subtitle: 'Domine brilhos, íris e pestanas dinâmicas em 5 passos.',
    level: 'facil',
    durationMinutes: 8,
    stepsCount: 5,
    rating: 4.9,
    category: 'anime',
    coverImage: APP_ASSETS.animeEye,
    steps: [
      {
        stepNumber: 1,
        title: 'Arco Superior com Traço Grosso',
        description: 'Trace a pestana superior com espessura variável, afinando para o canto interno.',
        tip: 'O traço mais espesso no topo confere estilo moderno e leitura visual rápida.',
        guideImage: APP_ASSETS.animeEye,
        thumbnailImage: APP_ASSETS.animeEye
      },
      {
        stepNumber: 2,
        title: 'Íris Oval Alongada',
        description: 'No anime, a íris é frequentemente uma elipse vertical em vez de um círculo perfeito.',
        tip: 'Corte o topo da elipse com o arco da pestana superior.',
        guideImage: APP_ASSETS.animeEye,
        thumbnailImage: APP_ASSETS.animeEye
      },
      {
        stepNumber: 3,
        title: 'Duplo Ponto de Luz e Reflexos',
        description: 'Desenhe um círculo de luz maior e um menor no canto oposto antes de aplicar tons escuros.',
        tip: 'Preserve esse espaço totalmente branco no papel.',
        guideImage: APP_ASSETS.animeEye,
        thumbnailImage: APP_ASSETS.animeEye
      },
      {
        stepNumber: 4,
        title: 'Degradê Superior para Inferior',
        description: 'Pinte a metade superior da íris bem escura e clareie gradualmente até a base.',
        tip: 'O fundo claro da íris cria a ilusão de transparência e brilho aquoso.',
        guideImage: APP_ASSETS.animeEye,
        thumbnailImage: APP_ASSETS.animeEye
      },
      {
        stepNumber: 5,
        title: 'Pequenas Pestanas Estilizadas',
        description: 'Adicione dois ou três pequenos picos triangulares na extremidade externa.',
        tip: 'Menos é mais: o excesso de detalhes pode tirar a elegância do estilo mangá.',
        guideImage: APP_ASSETS.animeEye,
        thumbnailImage: APP_ASSETS.animeEye
      }
    ]
  },
  {
    id: 'aula-esfera',
    title: 'Esfera: Luz & Sombra',
    subtitle: 'Aprenda a criar volume 3D com degradê de hachuras.',
    level: 'facil',
    durationMinutes: 10,
    stepsCount: 4,
    rating: 4.8,
    category: 'fundamentos',
    coverImage: APP_ASSETS.sphere,
    steps: [
      {
        stepNumber: 1,
        title: 'Círculo e Marcação da Luz',
        description: 'Faça o contorno circular e marque uma pequena elipse onde incidirá a luz máxima.',
        tip: 'Gire o papel se achar mais fácil fazer curvas com o punho.',
        guideImage: APP_ASSETS.sphere,
        thumbnailImage: APP_ASSETS.sphere
      },
      {
        stepNumber: 2,
        title: 'Primeira Camada de Tom Médio',
        description: 'Preencha a região com linhas diagonais regulares usando lápis 2B.',
        tip: 'Mantenha a pressão uniforme para não criar manchas indesejadas.',
        guideImage: APP_ASSETS.sphere,
        thumbnailImage: APP_ASSETS.sphere
      },
      {
        stepNumber: 3,
        title: 'Hachuras Cruzadas na Sombra',
        description: 'Sobreponha uma segunda camada de linhas cruzadas na metade mais escura da esfera.',
        tip: 'O cruzamento de linhas aumenta a densidade tonal naturalmente.',
        guideImage: APP_ASSETS.sphere,
        thumbnailImage: APP_ASSETS.sphere
      },
      {
        stepNumber: 4,
        title: 'Sombra de Mesa e Contato',
        description: 'Desenhe a sombra elíptica projetada no chão logo abaixo da esfera.',
        tip: 'A borda inferior deve parecer apoiada com firmeza na superfície.',
        guideImage: APP_ASSETS.sphere,
        thumbnailImage: APP_ASSETS.sphere
      }
    ]
  },
  {
    id: 'aula-face-loomis',
    title: 'Anatomia Facial: Regra dos Terços',
    subtitle: 'Equilíbrio perfeito entre olhos, nariz e queixo.',
    level: 'medio',
    durationMinutes: 18,
    stepsCount: 7,
    rating: 5.0,
    category: 'pessoas',
    coverImage: APP_ASSETS.faceAnatomy,
    steps: [
      {
        stepNumber: 1,
        title: 'Esfera e Corte Lateral (Método Loomis)',
        description: 'Desenhe a esfera do crânio e corte as laterais com elipses para simular as têmporas.',
        tip: 'O crânio humano não é uma esfera pura: é achatado nos lados.',
        guideImage: APP_ASSETS.faceAnatomy,
        thumbnailImage: APP_ASSETS.faceAnatomy
      },
      {
        stepNumber: 2,
        title: 'Divisão dos Três Terços Iguais',
        description: 'Marque a linha da testa, a base do nariz e a linha do queixo em distâncias equivalentes.',
        tip: 'Essa proporção clássica serve de alicerce para qualquer rosto realista ou estilizado.',
        guideImage: APP_ASSETS.faceAnatomy,
        thumbnailImage: APP_ASSETS.faceAnatomy
      },
      {
        stepNumber: 3,
        title: 'Plano da Mandíbula e Queixo',
        description: 'Conecte as têmporas ao queixo com retas suaves formando a estrutura óssea.',
        tip: 'Dê atenção ao ângulo da mandíbula abaixo da orelha.',
        guideImage: APP_ASSETS.faceAnatomy,
        thumbnailImage: APP_ASSETS.faceAnatomy
      }
    ]
  },
  {
    id: 'aula-maos',
    title: 'Mãos e Gestos Naturais',
    subtitle: 'Desmistifique os dedos com a técnica de blocos.',
    level: 'dificil',
    durationMinutes: 25,
    stepsCount: 9,
    rating: 4.9,
    category: 'pessoas',
    coverImage: APP_ASSETS.hands,
    steps: [
      {
        stepNumber: 1,
        title: 'Bloco da Palma (Forma de Cunha)',
        description: 'Trate a palma da mão como uma caixa ou cunha ligeiramente curva e flexível.',
        tip: 'Nunca tente desenhar os dedos antes de firmar a estrutura sólida da palma.',
        guideImage: APP_ASSETS.hands,
        thumbnailImage: APP_ASSETS.hands
      },
      {
        stepNumber: 2,
        title: 'Arco das Articulações dos Nós',
        description: 'Trace uma curva suave no topo da palma para posicionar os quatro nós dos dedos.',
        tip: 'O dedo médio é o ponto mais alto do arco das articulações.',
        guideImage: APP_ASSETS.hands,
        thumbnailImage: APP_ASSETS.hands
      },
      {
        stepNumber: 3,
        title: 'Dedos em Três Cilindros Conectados',
        description: 'Construa cada dedo em três segmentos cilíndricos com espessura decrescente.',
        tip: 'Observe a dobra natural de cada falange ao fechar ou relaxar a mão.',
        guideImage: APP_ASSETS.hands,
        thumbnailImage: APP_ASSETS.hands
      }
    ]
  },
  {
    id: 'aula-cachorrinho',
    title: 'Cachorrinho Filhote',
    subtitle: 'Perspectiva amigável e olhos expressivos.',
    level: 'medio',
    durationMinutes: 15,
    stepsCount: 6,
    rating: 4.7,
    category: 'animais',
    coverImage: APP_ASSETS.puppy,
    steps: [
      {
        stepNumber: 1,
        title: 'Formas Geométricas do Corpo',
        description: 'Esboce duas esferas: uma maior para a cabeça e uma oval para o tórax com patinhas em cilindro.',
        tip: 'Filhotes possuem proporção com cabeça proporcionalmente maior.',
        guideImage: APP_ASSETS.puppy,
        thumbnailImage: APP_ASSETS.puppy
      },
      {
        stepNumber: 2,
        title: 'Orelhas Caídas e Focinho Curto',
        description: 'Posicione as orelhas relaxadas caindo suavemente nas laterais do crânio.',
        tip: 'O focinho curto acentua o carisma jovial do animal.',
        guideImage: APP_ASSETS.puppy,
        thumbnailImage: APP_ASSETS.puppy
      }
    ]
  },
  {
    id: 'aula-folhagens',
    title: 'Folhagens & Texturas',
    subtitle: 'Crie copas de árvores ricas com rabiscos soltos.',
    level: 'facil',
    durationMinutes: 12,
    stepsCount: 5,
    rating: 4.8,
    category: 'natureza',
    coverImage: APP_ASSETS.foliage,
    steps: [
      {
        stepNumber: 1,
        title: 'Nuvens de Volume da Copa',
        description: 'Desenhe grupos de nuvens orgânicas para marcar a silhueta principal da árvore.',
        tip: 'Não desenhe folha por folha: pense no conjunto volumétrico sob a luz do sol.',
        guideImage: APP_ASSETS.foliage,
        thumbnailImage: APP_ASSETS.foliage
      },
      {
        stepNumber: 2,
        title: 'Rabiscos Orgânicos em Cacho',
        description: 'Preencha as sombras sob cada nuvem com pequenos laços e rabiscos em forma de 8.',
        tip: 'A variedade de pressão dá riqueza de textura às folhas.',
        guideImage: APP_ASSETS.foliage,
        thumbnailImage: APP_ASSETS.foliage
      }
    ]
  }
];

export const INITIAL_GALLERY: Artwork[] = [
  {
    id: 'art-1',
    title: 'Olho Realista com Grafite',
    lessonName: 'Aula: Sombreamento Avançado',
    imageUrl: APP_ASSETS.galleryEye,
    dateLabel: 'Hoje',
    likes: 42,
    isLiked: false,
    statusLabel: '100% Concluída',
    tags: ['Grafite 6B', 'Olho', 'Realismo'],
    feedbackNotes: 6
  },
  {
    id: 'art-2',
    title: 'Gatinho Siamês em Esboço',
    lessonName: 'Aula: Pelagens e Animais',
    imageUrl: APP_ASSETS.galleryCat,
    dateLabel: 'Ontem',
    likes: 38,
    isLiked: false,
    statusLabel: 'Feedback: 4 notas',
    tags: ['Animais', 'Esboço Rápido'],
    feedbackNotes: 4
  },
  {
    id: 'art-3',
    title: 'Retrato Rápido estilo Anime',
    lessonName: 'Aula: Rostos e Expressões',
    imageUrl: APP_ASSETS.galleryAnimeGirl,
    dateLabel: '3d atrás',
    likes: 29,
    isLiked: false,
    statusLabel: 'Estudo Rápido',
    tags: ['Anime', 'Mangá', 'Mechas'],
    feedbackNotes: 2
  },
  {
    id: 'art-4',
    title: 'Estudo de Mãos e Poses',
    lessonName: 'Aula: Anatomia das Mãos',
    imageUrl: APP_ASSETS.galleryHands,
    dateLabel: '5d atrás',
    likes: 51,
    isLiked: false,
    statusLabel: 'Destaque do Dia',
    tags: ['Anatomia', 'Gestual', 'Cunha'],
    feedbackNotes: 9
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Primeiro Traço',
    description: 'Concluiu com sucesso a primeira aula do zero.',
    xp: 100,
    icon: 'emoji_events',
    status: 'unlocked'
  },
  {
    id: 'ach-2',
    title: 'Fogo nos Dedos',
    description: '7 dias consecutivos desenhando diariamente.',
    xp: 250,
    icon: 'local_fire_department',
    status: 'unlocked'
  },
  {
    id: 'ach-3',
    title: 'Mestre da Sombra',
    description: '5 lições avançadas de luz e volume finalizadas.',
    xp: 300,
    icon: 'brightness_6',
    status: 'unlocked'
  },
  {
    id: 'ach-4',
    title: 'Mestre dos Animais',
    description: 'Desenhe 5 espécies diferentes com proporção.',
    xp: 150,
    icon: 'pets',
    status: 'in_progress',
    progress: {
      current: 3,
      total: 5
    }
  },
  {
    id: 'ach-5',
    title: 'Retratista Nato',
    description: 'Conclua 10 estudos de cabeça em ângulos diversos.',
    xp: 400,
    icon: 'lock',
    status: 'locked'
  }
];

export const INITIAL_SETTINGS: AppSettings = {
  theme: 'escuro',
  sunsetTheme: true,
  highContrast: false,
  showGuidelines: true,
  handOrientation: 'destro',
  scanCameraEnabled: true,
  dailyReminderTime: '19:30',
  protectStreak: true,
  communityNotifications: true
};
