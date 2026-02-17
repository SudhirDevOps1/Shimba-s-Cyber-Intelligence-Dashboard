// ═══ NAYA DORK ADD KARNA ═══
// DATA.cheatSheet.dorks array mein add karo:
{code:'inurl:phpinfo', desc:'Finds PHP info pages', dork:'inurl:phpinfo'}

// ═══ NAYA BASH COMMAND ADD KARNA ═══
// DATA.cheatSheet.bash array mein add karo:
{cmd:'top', desc:'Shows real-time system resource usage'}

// ═══ NAYA SECURITY RULE ADD KARNA ═══
// DATA.cheatSheet.rules array mein add karo:
{icon:'🔒', title:'2FA Always', desc:'Enable two-factor auth on all accounts'}

// ═══ NAYA OSINT TOOL ADD KARNA ═══
// DATA.tools array mein add karo:
{name:'🔍 Censys', desc:'Internet-wide scanning engine', features:['hosts','certs']}

// ═══ NAYA PRESET ADD KARNA ═══
// DATA.presets array mein add karo:
{id:'ml', icon:'🤖', name:'Machine Learning', q:'intitle:"machine learning" filetype:pdf site:arxiv.org'}

// ═══ NAYA QUICK OPERATOR ADD KARNA ═══
// DATA.quickOps array mein add karo:
'inurl:phpinfo'

// ═══ SOCIAL PLATFORM ADD KARNA ═══
// DATA.social array mein add karo:
{id:'youtube', icon:'▶️', name:'YouTube', cls:'bO', 
 url: q => `https://www.google.com/search?q=site:youtube.com+${encodeURIComponent(q)}`}
