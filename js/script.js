// Database of duas and adkar
const duasDatabase = {
    morning: [
        {
            title: "الاستيقاظ من النوم",
            text: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور",
            source: "البخاري ومسلم"
        },
        {
            title: "دخول الحمام",
            text: "بسم الله، اللهم إني أعوذ بك من الخبث والخبائث",
            source: "البخاري ومسلم"
        },
        {
            title: "الدعاء عند الوضوء",
            text: "اللهم اجعلني من التوابين واجعلني من المتطهرين",
            source: "الترمذي"
        },
        {
            title: "التشهد من السنة",
            text: "اللهم إني أسألك يا ذا الجلال والإكرام أن تحفظني في هذا اليوم من الشر",
            source: "صحيح الترغيب"
        }
    ],
    evening: [
        {
            title: "أذكار المساء",
            text: "أمسينا وأمسى الملك لله، والحمد لله لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
            source: "الترمذي"
        },
        {
            title: "دعاء المساء",
            text: "اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك النشور",
            source: "الترمذي"
        },
        {
            title: "حفظ الجسد",
            text: "أعوذ بكلمات الله التامة من كل شيطان وهامة، ومن كل عين لامة",
            source: "البخاري ومسلم"
        }
    ],
    food: [
        {
            title: "قبل الطعام",
            text: "بسم الله الرحمن الرحيم",
            source: "من الكتاب الكريم"
        },
        {
            title: "بعد الطعام",
            text: "الحمد لله الذي أطعمنا وسقانا وجعلنا من المسلمين",
            source: "الترمذي وأبو داود"
        },
        {
            title: "دعاء شامل للطعام",
            text: "اللهم بارك لنا فيما رزقتنا وقنا عذاب النار",
            source: "الترمذي"
        }
    ],
    sleep: [
        {
            title: "عند النوم",
            text: "اللهم أنت خلقت نفسي وأنت توفاها، لك مماتها ومحياها، إن أحييتها فاحفظها، وإن أمتها فاغفر لها، اللهم إني أسألك العافية",
            source: "البخاري ومسلم"
        },
        {
            title: "تنام على طهر",
            text: "تنم على طهر فطهر من الأدناس، ونم على اسم كريم يحفظك",
            source: "صحيح الدعاء"
        },
        {
            title: "الآية الكريمة",
            text: "بسم الله وضعت جنبي، اللهم اغفر لي ذنبي، وأطلق لي رزقي، وسهل لي أعمالي",
            source: "الحديث الصحيح"
        }
    ],
    prayer: [
        {
            title: "التشهد الأول",
            text: "التحيات لله والصلوات والطيبات، السلام عليك أيها النبي ورحمة الله وبركاته، السلام علينا وعلى عباد الله الصالحين، أشهد أن لا إله إلا الله وأشهد أن محمدا عبده ورسوله",
            source: "صحيح البخاري"
        },
        {
            title: "دعاء قنوت الوتر",
            text: "اللهم إني أسألك برحمتك التي وسعت كل شيء أن تغفر لي",
            source: "البخاري"
        },
        {
            title: "السلام من الصلاة",
            text: "السلام عليكم ورحمة الله وبركاته",
            source: "القرآن والسنة"
        }
    ],
    travel: [
        {
            title: "دعاء المسافر",
            text: "اللهم إني أسألك في سفري هذا البر والتقوى، ومن العمل ما ترضى، اللهم هون علينا سفرنا هذا واطو عنا بعده",
            source: "صحيح مسلم"
        },
        {
            title: "ركوب الدابة",
            text: "سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون",
            source: "الترمذي"
        },
        {
            title: "العودة من السفر",
            text: "آيبون تائبون عابدون ساجدون لربنا حامدون",
            source: "صحيح مسلم"
        }
    ]
};

// Load category duas
function loadCategory(category) {
    const duas = duasDatabase[category] || [];
    const contentArea = document.getElementById('content');
    
    if (duas.length === 0) {
        contentArea.innerHTML = '<p>لا توجد أدعية في هذا القسم حالياً</p>';
        return;
    }
    
    let html = `<h2>${getCategoryTitle(category)}</h2>`;
    
    duas.forEach((dua, index) => {
        html += `
            <div class="dua-item">
                <h3>${dua.title}</h3>
                <div class="dua-text">${dua.text}</div>
                <div class="dua-source">📚 المصدر: ${dua.source}</div>
                <div class="dua-actions">
                    <button class="dua-btn" onclick="copyToClipboard('${dua.text.replace(/'/g, "\\'")}')">
                        <i class="fas fa-copy"></i> نسخ
                    </button>
                    <button class="dua-btn" onclick="shareText('${dua.title}', '${dua.text.replace(/'/g, "\\'")}')">
                        <i class="fas fa-share"></i> شارك
                    </button>
                </div>
            </div>
        `;
    });
    
    contentArea.innerHTML = html;
    document.querySelector('.content-section').scrollIntoView({behavior: 'smooth'});
}

// Get category title in Arabic
function getCategoryTitle(category) {
    const titles = {
        morning: 'أذكار الصباح',
        evening: 'أذكار المساء',
        food: 'قبل وبعد الطعام',
        sleep: 'أذكار النوم',
        prayer: 'أدعية الصلاة',
        travel: 'أدعية السفر'
    };
    return titles[category] || category;
}

// Search functionality
function searchDuas() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput.trim() === '') {
        searchResults.innerHTML = '';
        return;
    }
    
    let results = [];
    
    // Search in all categories
    Object.keys(duasDatabase).forEach(category => {
        duasDatabase[category].forEach(dua => {
            if (dua.title.includes(searchInput) || dua.text.includes(searchInput)) {
                results.push({...dua, category});
            }
        });
    });
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="color: #e74c3c; margin: 20px 0;">لم يتم العثور على نتائج</p>';
        return;
    }
    
    let html = `<p style="color: #2ecc71; margin: 20px 0;">تم العثور على ${results.length} نتيجة</p>`;
    
    results.forEach(dua => {
        html += `
            <div class="search-result-item">
                <h4>${dua.title}</h4>
                <p style="margin: 10px 0; color: #555;">${dua.text.substring(0, 100)}...</p>
                <small style="color: #7f8c8d;">من قسم: ${getCategoryTitle(dua.category)}</small>
            </div>
        `;
    });
    
    searchResults.innerHTML = html;
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('تم نسخ الدعاء');
    }).catch(err => {
        console.error('خطأ في النسخ:', err);
    });
}

// Share text
function shareText(title, text) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text
        });
    } else {
        alert(`${title}\n\n${text}`);
    }
}

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.style.display = 'none';
        });
    });
});

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchDuas();
            }
        });
    }
});
