const infodono = (prefix, numerodn, NomeDoBot, sender) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return`

┏━━━━━•(=^●ω●^=)•━━━━┓
           𝙸𝙽𝙵𝙾-𝙳𝙾𝙽𝙾
┗━━━━━•(=^●ω●^=)•━━━━┛                                
┎━━┅┅┄┈┄✧┈┈✦❖┄┄ 
┋🌀Solicitou o CMD: @${sender.split("@")[0]}
┋━━┅┅┄┈┄✧┈┈✦❖┄┄ 
┋🌀Dono: wa.me/${numerodn}
┋🌀Prefixo: ⩺ ${prefix}
┋🌀Nome: ⩺ ${NomeDoBot}
┋
┖━━┅┅┄┈┄✧┈┈✦❖┄┄

`
}

exports.infodono = infodono