
const MAPS = {
    boldOutline: { 
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 
        to: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡" 
    },
    cursiveBold: { 
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 
        to: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖贬𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦齿𝓨𝓩" 
    },
    cursiveLight: {
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        to: "𝒶 get𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵"
    },
    gothicBold: { 
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 
        to: "𝖇𝖔𝖑𝖉𝖌𝖔𝖙𝖍𝖎𝖈𝖋𝖔𝖓𝖙𝖘𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕 messaging𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖶table𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅" 
    },
    gothicLight: { 
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 
        to: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰排列𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅  𝔇𝔈𝔉𝔊  ℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜  " 
    },
    circlesWhite: {
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        to: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨"
    },
    circlesBlack: {
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        to: "🅟🅗🅞🅝🅣🅢🅜🅟🅐🅡🅚🅐🅑🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆪🅐🅑🅒🅓🅔🅦🇬🅗🅘🅿🅁🅛🅜🅝🅞🅟🅠🅁🅢🅣🅤🅥🅦🅧🅨🅩🄿🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇Feedback🅏"
    },
    squaresWhite: {
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        to: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿设定🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿设定🅁🅂🅃🅄🅅🅆🅇🅈🅉"
    },
    mathBold: {
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        to: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐉𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
    },
    mathItalic: {
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        to: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡"
    },
    monospace: {
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        to: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"
    },
    smallCaps: {
        from: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        to: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ"
    },
    subscript: {
        from: "abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        to: "ₐ𝄲𝄳𝄴ₑ𝄵𝄶ₕ𝄷ⱼₖₗₘ𝄸ₒₚ𝄹ᵣₛₜᵤᵥ𝄺ₓᵧ𝄻ₐ𝄲𝄳𝄴ₑ𝄵𝄶ₕ𝄷ⱼₖₗₘ𝄸ₒₚ𝄹ᵣₛₜᵤᵥ𝄺ₓᵧ𝄻"
    }
};


    let baseStyles = {
    normal: inputText,
    boldOutline: convertText(inputText, MAPS.boldOutline),
    cursiveBold: convertText(inputText, MAPS.cursiveBold),
    cursiveLight: convertText(inputText, MAPS.cursiveLight),
    gothicBold: convertText(inputText, MAPS.gothicBold),
    gothicLight: convertText(inputText, MAPS.gothicLight),
    circlesWhite: convertText(inputText, MAPS.circlesWhite),
    circlesBlack: convertText(inputText, MAPS.circlesBlack),
    squaresWhite: convertText(inputText, MAPS.squaresWhite),
    mathBold: convertText(inputText, MAPS.mathBold),
    mathItalic: convertText(inputText, MAPS.mathItalic),
    monospace: convertText(inputText, MAPS.monospace),
    smallCaps: convertText(inputText, MAPS.smallCaps),
    subscript: convertText(inputText, MAPS.subscript),
    spaced: inputText.split("").join(" "),        
    dotted: inputText.split("").join("·"),         
    starry: inputText.split("").join("★"),        
    slashed: inputText.split("").join("/"),       
    underlined: inputText.split("").join("_"),     
    hyphen: inputText.split("").join("-"),       
    wave: inputText.split("").join("~"),           
    strike: inputText.split("").map(char => char + "\u0336").join(""), 
    underlineDouble: inputText.split("").map(char => char + "\u0333").join("") 
};

function gen(){
    let name = document.getElementById("name").value;
    let list = document.getElementById("list");
    list.innerHTML = "";
    let decos = DECORATIONS.freefire;
    
    let count = 0;
    decos.forEach(d=>{
        baseStyles.forEach(f =>{
            if(count >= 200)
                return;
            let styleName = toStyle(name,f);
            let finalText = d.pre + styleName + d.suf;

            list.innerHTML += `<div class="item">
            <span>${finalText}</span>
            <button onclick="navigator.clipboard.writeText('${finalText}')">copy</button>
            </div>`;
            Count++;
        });
        
    });

   
}
