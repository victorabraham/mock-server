const express = require('express');
const cors = require('cors');
// const { Pool } = require('pg');
const keys = require('./keys');

const app = express();
app.use(cors());

// const pgClient = new Pool({
//     user: keys.pgUser,
//     host: keys.pgHost,
//     database: keys.pgDatabase,
//     password: keys.pgPassword,
//     port: keys.pgPort
// });

app.get('/', (req, res) => {
    res.send('Mock Server');
});

app.post('/api-proxy/service/identity/oauth/v1/token', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(`
    {
        "access_token": "TEST_GM4NTFmMi0yMTc3LTRlMWEtYjMzNC03ODcyZTZhNDVmY2MiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..zd9Ytf3oxXV9u65g.MqFemIkmQ-p_byZJsWgsqulYAbc4-OEkWTQ4H4G_bYOoclpBCl1oJm8UL0Nprecm1T_2AxVoozu-5KQbF8REJre1uK49nE7SyOp9VZ_Og393UIsPNFQD5Q_FHKiXc_yg5xXN86xncbRQARMqPd5jbzNxDn_a6iHccvaeQheKPFON1RIPH8BxeFbQ0jPGQKz8-VBIS8P0eQHHb6tKRGylaT-wvcmSt_EXGqtOCXYLWLo-CMIOsEsn2e8KEZwHWMTcucUSAQDSaRuXjCgGYcs2Ii4zZb1jcNG1AuXVKK1IoekqIDKefjDJxgFvihtmR2MSoO_mRg4qt9yqNkBIbA9EfZKQLg2px94v4AdGCCE1MS8rQO2-_cJowVYubIqCMEYx9AapjaVoAJYg42LVOJ-Tt1A4qvBRc1G9YmsW6RZ_qgwsQbRriwnTWEC6OgY6GCrJxrPrZGd2Wm3Li1PkXlaZuwTCjEOaaJ8amm5cDbP2A1vHDa6qkKhC4PuINfvpGUi7U2JmuNazi0tywgdEVnk2mptoXLiOHOrmBbBrL1FDFYht4KBX4SwnPX4wsfFZatVdjhIZvV7hJtx2iTaByS7jARtTVHRg8FIKdeUd3fBM-E3T1d8GtvyCkhna0GmDkPqGR1vdd0Prg03fG5br4DU4cTnUllEW_N2N9SDfbXp6Iei1IIgs9VKYXRxdOCrN5PIHnxBlN8Y4W0_cfrAz1CNk3vd4sTl0d8a3IrYW3LdZ27gb8Gvx_uGrQlO9QnQRCHRCN0JW4x3aDso7UgwpmYKoIOhIpyldaSvB-26dFGJydJHlIODs_XaPqaUOm5iJnQIUK_W7G6z0vQn7dnALZUUpfgAScZHBNK8A2xKWvhnXNtiWwgq69nWpMF4Ppb0lVuw8b9pPcp1pWLAFGc3Vo6bPwNypqOTfT34Tb0kW6CTNsEYBbFzLKg-3GuZC3SKrotJfxPuiQb8A2sXFr06V3RRquIZcCh6zD4rWQUXqUWhyh5x06h10J3FM4Gr7ShVJIl-Xaw.ir3vA5pP6Pyk3V6xmaa8Iw",
        "token_type": "Bearer",
        "expires_in": 900
    }
    `);
});

app.post('/api-proxy/service/supplychain/fulfillment/v1/faas/order/create', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(`
    {
        "status": "ok",
        "message": "success"
    }
    `);
});

app.listen(process.env.PORT || 3000, err => {
    console.log('listening');
})