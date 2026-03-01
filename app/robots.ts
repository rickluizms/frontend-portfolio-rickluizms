import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://seusite.com.br/sitemap.xml', // IMPORTANTE: Substitua pela sua URL real em produção
    }
}
