import { Body, Controller, Delete, Get, Param, Post, RequestMethod } from '@nestjs/common';
import { NoticiasRepository } from './repository/noticias-repository';
import { NoticiasCadastroDto } from './dto/noticias-cadastro.dto';
import { NoticiasEntity} from './entity/noticias-entity';
import { v4 as uuid } from 'uuid';


@Controller('noticias')
export class NoticiasController {
    constructor(
        private readonly _repository: NoticiasRepository
    ){
        this.preCadastrarNoticias()
    }

    private async preCadastrarNoticias() {
        this._repository.createNoticia(
            {
                id: uuid(),
                titulo: 'Google reforça requisitos de segurança para publicar aplicativos na Play Store',
                subtitulo: 'Desenvolvedores terão que ativar a verificação em duas etapas e fornecer endereço físico no cadastro.',
                autor: 'Altieres Rohr',
                data: '30-06-2021',
                imagens: [
                    {
                        url:"https://s2-g1.glbimg.com/VnSQR420Ew1eiFUKh4NR0jb31jo=/0x0:2048x1231/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/W/i/JCOT94SQq38C5j4n3Djw/game-android.jpg"
                    }
                ],
                destaque: 'https://s2-g1.glbimg.com/VnSQR420Ew1eiFUKh4NR0jb31jo=/0x0:2048x1231/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/W/i/JCOT94SQq38C5j4n3Djw/game-android.jpg',

                resumo: 'O Google anunciou que vai reforçar a ficha cadastral e a segurança das contas de desenvolvedores de aplicativos para Android. A mudança tornará obrigatório o uso da autenticação em duas etapas e a verificação de informações de contato (telefone e e-mail).',
                texto: 'O Google anunciou medidas para reforçar a segurança das contas de desenvolvedores de aplicativos para Android na Play Store. As mudanças incluem a obrigatoriedade da autenticação em duas etapas, verificação de informações de contato, associação de um endereço físico à conta e especificação se a conta é pessoal ou de uma organização. Essas medidas visam impedir invasões e adulterações nas contas de desenvolvedores, evitando a distribuição de atualizações maliciosas para os usuários. O Google tem enfrentado desafios para manter a Play Store livre de aplicativos maliciosos. As novas regras serão aplicadas aos novos cadastros a partir de agosto e também se tornarão obrigatórias para as contas existentes. Os dados solicitados não serão visíveis para os usuários e serão usados apenas internamente pela empresa. É recomendado que os desenvolvedores usem um e-mail próprio para tarefas relacionadas às contas, e as contas de organizações devem utilizar um e-mail profissional. Além disso, é importante manter as informações de contato atualizadas, pois o Google pode entrar em contato para verificar a atividade da conta.'
            } as NoticiasEntity
        )

        this._repository.createNoticia(
            {
                id: uuid(),
                titulo: 'Empresa se engana sobre atualização do Windows e divulga código de ataque para vulnerabilidade crítica',
                subtitulo: 'Consultoria de segurança chinesa achou que falha já estivesse corrigida.',
                autor: ' Altieres Rohr',
                data: '30-06-2021',
                imagens: [
                    {
                        url:"https://s2-g1.glbimg.com/nJxfdqAZogdWCbsC6BVe-TY3_YE=/0x0:1279x659/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/w/S/7TBIfrQFyBmLV3kHA3mw/teclado-acorrentado.jpg"
                    }
                ],
                destaque: 'https://s2-g1.glbimg.com/nJxfdqAZogdWCbsC6BVe-TY3_YE=/0x0:1279x659/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/w/S/7TBIfrQFyBmLV3kHA3mw/teclado-acorrentado.jpg',
                resumo: 'Uma empresa cometeu um equívoco ao divulgar o código de ataque para uma vulnerabilidade crítica do Windows, acreditando que era uma atualização legítima. Esse incidente resultou na exposição do código de ataque, o que pode permitir que hackers explorem a vulnerabilidade. A divulgação acidental do código de ataque é uma falha grave que pode colocar em risco a segurança dos sistemas operacionais Windows afetados.',
                texto: 'Especialistas em segurança da consultoria Sangfor, da China, cometeram um equívoco ao divulgar um código de ataque para uma vulnerabilidade crítica no Windows, confundindo-a com uma falha corrigida recentemente. A Microsoft havia corrigido uma falha no "Spooler de impressão", mas a Sangfor acreditou erroneamente que era a mesma vulnerabilidade que eles haviam identificado. A divulgação acidental do código de ataque permitiu que a versão divulgada circulasse, colocando em risco os sistemas Windows afetados. A falha pode ser explorada para invadir sistemas Windows com acesso total, apresentando um alto potencial de dano em contextos empresariais. Embora não represente um risco imediato para usuários domésticos, medidas de precaução e desativação do serviço de "spooler de impressão" são recomendadas. A Microsoft ainda não definiu uma data para corrigir essa vulnerabilidade.'
            } as NoticiasEntity
        )

        this._repository.createNoticia(
            {
                id: uuid(),
                titulo: 'Microsoft já vale US$ 2,6 trilhões graças à inteligência artificial',
                subtitulo: 'Gigante da tecnologia viu suas ações crescerem, atingindo novo recorde de US$ 348,10 no pregão de quinta-feira. O mercado tem visto com bons olhos os investimentos da empresa com IA.',
                autor: 'João Magalhães',
                data: '16-06-2023',
                imagens: [
                    {
                        url:"https://s2-g1.glbimg.com/xBTZIYNBH8x45bssZQeEmpR3iJY=/0x0:1024x711/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/e/5/tpfAJuQiOkSJuqB5kUag/ap16145604471751.jpg"
                    }
                ],
                destaque: 'https://s2-g1.glbimg.com/xBTZIYNBH8x45bssZQeEmpR3iJY=/0x0:1024x711/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/e/5/tpfAJuQiOkSJuqB5kUag/ap16145604471751.jpg',
                resumo: ' As ações fecharam com alta de 3,2% e atingiram seu fechamento recorde anterior. A Microsoft é considerada líder na adoção de IA devido ao seu investimento na OpenAI. ',
                texto: 'As ações da Microsoft atingiram um novo recorde, impulsionadas pelo otimismo do mercado em relação à inteligência artificial (IA), levando a empresa a alcançar um valor de mercado de US$ 2,6 trilhões. As ações fecharam em alta de 3,2% e atingiram seu fechamento recorde anterior. A Microsoft é vista como líder na adoção de tecnologia de IA devido ao seu investimento na OpenAI. Analistas do JPMorgan elevaram o preço-alvo das ações, citando a demanda impulsionada pela IA. A Apple também viu suas ações atingirem o maior preço da história recentemente.'
            } as NoticiasEntity
        )

        this._repository.createNoticia(
            {
                id: uuid(),
                titulo: 'Inteligência artificial',
                subtitulo: 'Inteligência artificial: o paradoxo que explica por que robôs acham fácil o que é difícil e difícil o que é fácil',
                autor: 'Paulo José Cunha',
                data: '14-06-2023',
                imagens: [
                    {
                        url:"https://s2-g1.glbimg.com/BqpVAVpTrXmw914FrCt-r2kppvc=/0x0:800x450/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/K/j/K6oqziRBAczEBiSPNc1A/dfd7add0-0958-11ee-b5af-25e80c61c11a.jpg"
                    }
                ],
                destaque: 'https://s2-g1.glbimg.com/BqpVAVpTrXmw914FrCt-r2kppvc=/0x0:800x450/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/K/j/K6oqziRBAczEBiSPNc1A/dfd7add0-0958-11ee-b5af-25e80c61c11a.jpg',
                resumo: 'Será que, algum dia, iremos conseguir criar um robô com as mesmas capacidades do ser humano? O surpreendente surgimento do ChatGPT e de outros programas de inteligência artificial faz com que esta pergunta se torne cada vez mais relevante.',
                texto: 'Com o surgimento surpreendente do ChatGPT e outras formas de inteligência artificial, surge a pergunta sobre a capacidade desses programas de imitar plenamente o pensamento e ação humana. Embora a IA seja capaz de imitar sistemas complexos de raciocínio e criatividade, ainda enfrenta desafios em tarefas aparentemente simples, como amarrar um sapato. Isso é conhecido como o paradoxo de Moravec, que destaca a dificuldade de reproduzir em nível computacional as habilidades que os seres humanos adquiriram ao longo de centenas de milhares de anos de evolução. Enquanto processos baseados em raciocínio podem ser reproduzidos com sucesso, aqueles relacionados a tarefas mais simples ainda são um desafio para a inteligência artificial.'
            } as NoticiasEntity
        )

        this._repository.createNoticia(
            {
                id: uuid(),
                titulo: 'Usuários relatam instabilidade no WhatsApp, Instagram e Facebook nesta sexta',
                subtitulo: 'WhatsApp registrou mais de 10 mil relatos por volta das 16h30 no site Downdetector, que monitora falhas em aplicativos. Número de reclamações voltou ao normal às 17h40.',
                autor: 'Manuel Carlos',
                data: '16-06-2023',
                imagens: [
                    {
                        url:"https://s2-g1.glbimg.com/QU065zcV8N53ZkxUixifr0-ag4I=/0x0:800x538/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/O/G/hKkRpKQTufEdwBjIXzvA/a87729d0-f2a9-11ed-a142-ab0e42bfd9c3.jpg"
                    }
                ],
                destaque: 'https://s2-g1.glbimg.com/QU065zcV8N53ZkxUixifr0-ag4I=/0x0:800x538/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/O/G/hKkRpKQTufEdwBjIXzvA/a87729d0-f2a9-11ed-a142-ab0e42bfd9c3.jpg',
                resumo: 'Usuários enfrentaram instabilidade no WhatsApp, Instagram e Facebook.',
                texto: 'Usuários enfrentaram instabilidade no WhatsApp, Instagram e Facebook, com dificuldades para enviar áudios e problemas na exibição de imagens e publicação de stories. A empresa responsável pelas plataformas, Meta, reconheceu os problemas e afirmou estar trabalhando para resolvê-los o mais rápido possível. O Downdetector registrou um pico de notificações sobre falhas nos aplicativos, que retornaram ao normal algumas horas depois. Os usuários relataram dificuldades no envio de mensagens, áudios e postagens nas redes sociais.'
            } as NoticiasEntity
        )
    }

    @Post()
    createNoticia(@Body() noticia: NoticiasCadastroDto){
        let noticiaEntity = new NoticiasEntity()


        noticiaEntity.id = uuid()
        noticiaEntity.titulo = noticia.titulo
        noticiaEntity.subtitulo = noticia.subtitulo
        noticiaEntity.autor = noticia.autor
        noticiaEntity.data = noticia.data
        noticiaEntity.imagens = noticia.imagens
        noticiaEntity.destaque = noticia.destaque
        noticiaEntity.resumo = noticia.resumo
        noticiaEntity.texto = noticia.texto

        this._repository.createNoticia(noticiaEntity)

        return{
            mensagem: 'Cadastro de noticias',
            data: noticiaEntity
        }

    }


    @Get()
    getNoticias(){
        return this._repository.listNoticias()
    }

    @Get(':id')
    getNoticia(@Param() param: any){
        return this._repository.findByID(param.id)        
    }

    @Delete(':id')
    removeNoticia(@Param() param: any){
        return this._repository.removeNoticia(param.id)
    }
}
