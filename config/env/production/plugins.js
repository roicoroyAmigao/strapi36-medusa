module.exports = ({ env }) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
            upload: {},
            delete: {},
        },
    },
    email: {
        provider: 'nodemailer',
        providerOptions: {
            host: env('GOOGLE_SMTP_HOST', 'smtp.example.com'),
            port: env('GOOGLE_SMTP_PORT', 587),
            auth: {
                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
            },
            // ... any custom nodemailer options
        },
        settings: {
            defaultFrom: 'roicoroy@mercadoamigao.com',
            defaultReplyTo: 'roicoroy@mercadoamigao.com',
            testAddress: 'roicoroy@yahoo.com.br',
        },
    },
});