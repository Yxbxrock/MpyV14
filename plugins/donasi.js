let handler = async m => m.reply(`
            .✵.Grup Bot.✵.

            https://chat.whatsapp.com/J7VtphVsCUXCMTnbLsRurn
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
