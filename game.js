/* ==========================================================================
   [STORY DATA] 분기 및 구조 확장 맵 데이터셋 (기존구조 유지)
   ========================================================================== */

const storyData = {
    5: {
        dayLabel: "D-5",
        topic: "경제적 불안정 (SDGs 8)",
        events: [
            {
                id: "M5_MAIN",
                skipIfPolicy: null,
                descriptions: "당장 오늘 하루를 버틸 식비가 없습니다. 골목 끝자락에서 안전 장치 없이 유독 물질을 다루는 불법 일용직 공장 제안서가 날아왔습니다.",
                loopTriggers: "[회귀의 기억] 익숙한 독성 냄새가 코끝을 찌릅니다. 이미 이 공장의 비참한 말로를 알고 있습니다.",
                choices: [
                    { text: "안전장치가 없는 불법 공장에서 하루 14시간 동안 일한다.", requiredPolicy: null, effect: { dignity: -30, tags: ["-노동착취"] }, nextEvent: "SYSTEM_REQ_DEATH" },
                    { text: "[정책 해금] 사회적 기업 우선 고용 보장 제도를 통해 정당한 안전 일자리에 지원한다.", requiredPolicy: "SDGs_8_EMPLOYMENT", effect: { dignity: +25, tags: ["+공정무역"] }, nextEvent: "M5_SIDE_1" }
                ]
            },
            {
                id: "M5_SIDE_1",
                skipIfPolicy: "SDGs_11_HOUSING", 
                descriptions: "정당한 임금을 받아 첫 고비를 넘겼습니다. 하지만 퇴근길에 악독한 사채업자들이 가로막으며 부당한 사채 이자를 즉시 독촉합니다.",
                loopTriggers: "[회귀의 기억] 길목을 막아선 저 사채업자들의 협박 패턴이 머릿속에 생생히 그려집니다.",
                choices: [
                    { text: "가진 돈을 전부 건네며 무력하게 굴복한다.", requiredPolicy: null, effect: { dignity: -20, tags: ["-소득상실"] }, nextEvent: "M5_SIDE_2" },
                    { text: "마을 주민 신용조합 네트워크에 상담을 요청하고 불법 채심판을 신고한다.", requiredPolicy: null, effect: { dignity: +10, tags: ["+금융안정"] }, nextEvent: "M5_SIDE_2" }
                ]
            },
            {
                id: "M5_SIDE_2",
                skipIfPolicy: "SDGs_3_HEALTH", 
                descriptions: "경제 활동의 숨통이 조금 트이자, 어린 동생이 돈을 벌겠다며 정규 교육을 포기하고 위험한 철강 공장에 수습공으로 들어가려 합니다.",
                loopTriggers: "[회귀의 기억] 동생이 다시 학업을 내려놓으려 고민하고 있습니다. 이번엔 더 현명한 길을 열어주어야 합니다.",
                choices: [
                    { text: "어쩔 수 없는 현실을 받아들이고 동생을 현장으로 내보낸다.", requiredPolicy: null, effect: { dignity: -15, tags: ["-교육단절"] }, nextEvent: "M5_SIDE_3" },
                    { text: "동생을 설득하고 청소년 야간 무료 기술 교육 센터에 등록시킨다.", requiredPolicy: null, effect: { dignity: +15, tags: ["+교육기회"] }, nextEvent: "M5_SIDE_3" }
                ]
            },
            {
                id: "M5_SIDE_3",
                skipIfPolicy: "SDGs_3_HEALTH",
                descriptions: "밤낮없이 일하던 이웃 노동자가 과로로 공장 바닥에 쓰러졌습니다. 공장주는 책임을 회피하며 이웃을 강제 해고하려 소란을 피웁니다.",
                loopTriggers: "[회귀의 기억] 쓰러진 이웃을 둘러싼 냉혹한 공장주의 목소리가 다시 들려옵니다.",
                choices: [
                    { text: "소문이 퍼지면 내 일자리도 위험하니 조용히 눈을 감는다.", requiredPolicy: null, effect: { dignity: -15, tags: ["-권리방관"] }, nextEvent: "NEXT_DAY" },
                    { text: "지역 노동 인권 자문단에 알리고 공동 구제 진정서를 접수한다.", requiredPolicy: null, effect: { dignity: +15, tags: ["+노동연대"] }, nextEvent: "NEXT_DAY" }
                ]
            }
        ]
    },
    4: {
        dayLabel: "D-4",
        topic: "주거 위기 (SDGs 11)",
        events: [
            {
                id: "M4_MAIN",
                skipIfPolicy: null,
                descriptions: "안정된 일자리를 구했으나 빈민가는 허술합니다. 오늘 새벽 예산 부족을 핑계로 상업지구 확장을 위해 구역 전체를 강제 철거하겠다는 용역들이 들이닥쳤습니다.",
                loopTriggers: "[회귀의 기억] 철거반의 거친 중장비 소리가 다시 골목을 흔듭니다. 하지만 이번엔 대항할 법적 무기가 있습니다.",
                choices: [
                    { text: "대책 없이 맨몸으로 쫓겨나 차가운 길거리에서 밤을 지샌다.", requiredPolicy: null, effect: { dignity: -35, tags: ["-주거상실"] }, nextEvent: "SYSTEM_REQ_DEATH" },
                    { text: "[정책 해금] 국가 공공 주거 인권법에 따라 긴급 임시 보호 가옥을 신청해 철거에 대항한다.", requiredPolicy: "SDGs_11_HOUSING", effect: { dignity: +20, tags: ["+주거권확보"] }, nextEvent: "M4_SIDE_1" }
                ]
            },
            {
                id: "M4_SIDE_1",
                skipIfPolicy: "SDGs_3_HEALTH", 
                descriptions: "강제 철거는 간신히 면했으나 낡은 가옥의 노후된 보일러와 부식된 전기 배선 탓에 화재 경보가 불길하게 울려 퍼집니다.",
                loopTriggers: "[회귀의 기억] 합선 직전의 전선에서 타는 냄새가 다시 감지됩니다. 조치가 필요합니다.",
                choices: [
                    { text: "수리비가 아까우니 그냥 위험을 감수하고 눈을 붙인다.", requiredPolicy: null, effect: { dignity: -25, tags: ["-안전불감"] }, nextEvent: "M4_SIDE_2" },
                    { text: "안전 연대 청년단에게 긴급 SOS를 요청해 배선을 임시 교체한다.", requiredPolicy: null, effect: { dignity: +15, tags: ["+재난대비"] }, nextEvent: "M4_SIDE_2" }
                ]
            },
            {
                id: "M4_SIDE_2",
                skipIfPolicy: "SDGs_11_SAFETY",
                descriptions: "겨우 정비된 주거지 뒤편, 대형 건설사가 슬럼가 주민들의 공동 우물 자리를 콘크리트로 메우고 사설 주차장을 지으려 펜스를 칩니다.",
                loopTriggers: "[회귀의 기억] 생명줄인 우물터를 빼앗기던 순간의 분노가 다시금 되살아납니다.",
                choices: [
                    { text: "용역들과 마찰을 빚기 싫으니 그냥 펜스를 무시하고 다른 먼 곳에서 물을 길어오기로 한다.", requiredPolicy: null, effect: { dignity: -45, tags: ["-우물상실"] }, nextEvent: "SYSTEM_REQ_DEATH" },
                    { text: "주민 자치회와 함께 공유지 무단 점유 효력 정지 가처분 신청을 낸다.", requiredPolicy: null, effect: { dignity: +20, tags: ["+공동체수호"] }, nextEvent: "NEXT_DAY" }
                ]
            }
        ]
    },
    3: {
        dayLabel: "D-3",
        topic: "보건 위기 (SDGs 3)",
        events: [
            {
                id: "M3_MAIN",
                skipIfPolicy: null,
                descriptions: "마을 인프라 오염으로 인해 악성 수인성 전염병이 빈민가에 무섭게 번집니다. 당신의 목과 온몸도 타들어 가듯 아파옵니다.",
                loopTriggers: "[회귀의 기억] 온몸을 마비시키는 치명적인 고열이 다시 피부를 파고듭니다. 그러나 이번엔 마을 공공 의료망이 대기 중입니다.",
                choices: [
                    { text: "민간 약국의 극심한 폭리를 감당할 수 없어 골방에 누워 참아낸다.", requiredPolicy: null, effect: { dignity: -40, tags: ["-치명적감염"] }, nextEvent: "SYSTEM_REQ_DEATH" },
                    { text: "[정책 해금] 소외지역 거점 공공의료 센터로 이동해 무상 백신과 치료 처방을 신속히 받는다.", requiredPolicy: "SDGs_3_HEALTH", effect: { dignity: +25, tags: ["+공공의료수혜"] }, nextEvent: "M3_SIDE_1" }
                ]
            },
            {
                id: "M3_SIDE_1",
                skipIfPolicy: "SDGs_11_SAFETY", 
                descriptions: "치료를 받아 고비는 넘겼지만 식수가 오염되어 마실 물이 없습니다. 사설 급수차가 평소의 5배 가격으로 정수된 물을 강매하려 합니다.",
                loopTriggers: "[회귀의 기억] 사설 급수차 업자의 악독한 독점 폭리가 다시 시작되려 합니다.",
                choices: [
                    { text: "불합리하지만 생존을 위해 가진 돈을 다 털어 물을 산다.", requiredPolicy: null, effect: { dignity: -20, tags: ["-경제난"] }, nextEvent: "M3_SIDE_2" },
                    { text: "빗물 정화 공동 필터 제작법을 배워 이웃들과 대안 식수를 마련한다.", requiredPolicy: null, effect: { dignity: +15, tags: ["+식수확보"] }, nextEvent: "M3_SIDE_2" }
                ]
            },
            {
                id: "M3_SIDE_2",
                skipIfPolicy: "SDGs_11_SAFETY",
                descriptions: "위생 상태를 검사하던 중 인근 불법 공장에서 심야 시간대를 틈타 독성 화학 폐기물을 슬럼가 개천에 무단 투기하는 현장을 잡았습니다.",
                loopTriggers: "[회귀의 기억] 어둠 속에서 푸르스름한 오염수를 방류하는 공장의 실루엣이 선명하게 눈에 띕니다.",
                choices: [
                    { text: "보복이 두려우니 못 본 척 고개를 돌린다.", requiredPolicy: null, effect: { dignity: -20, tags: ["-환경방치"] }, nextEvent: "NEXT_DAY" },
                    { text: "환경 보호 연대와 연계하여 증거 사진을 언론에 폭로하고 고발한다.", requiredPolicy: null, effect: { dignity: +25, tags: ["+환경보호"] }, nextEvent: "NEXT_DAY" }
                ]
            }
        ]
    },
    2: {
        dayLabel: "D-2",
        topic: "치안 위기 (SDGs 11)",
        events: [
            {
                id: "M2_MAIN",
                skipIfPolicy: null,
                descriptions: "환경은 점차 정비되나 골목을 장악한 범죄 조직들이 무차별 이권 다툼 총격전을 벌입니다. 눈먼 탄환이 집 문을 부수고 날아듭니다.",
                loopTriggers: "[회귀의 기억] 사방을 울리는 총성과 비명소리. 하지만 이번엔 든든한 전담 순찰대가 대기하고 있습니다.",
                choices: [
                    { text: "두려움에 떨며 침대 밑에 숨어 무법 지대가 끝나길 눈물로 기도한다.", requiredPolicy: null, effect: { dignity: -50, tags: ["-생명위협"] }, nextEvent: "SYSTEM_REQ_DEATH" },
                    { text: "[정책 해금] 국가 치안 정상화 정책에 의해 긴급 배치된 커뮤니티 전담 순찰대에 신변 보호를 요청한다.", requiredPolicy: "SDGs_11_SAFETY", effect: { dignity: +20, tags: ["+공권력안전망"] }, nextEvent: "M2_SIDE_1" }
                ]
            },
            {
                id: "M2_SIDE_1",
                skipIfPolicy: null,
                descriptions: "공권력의 보호 아래 한숨 돌리는 사회적 분위기가 형성되는 와중, 범죄 잔당들이 골목의 어린 소년들을 협박해 마약 운반책으로 강제 동원하려는 현장을 목격합니다.",
                loopTriggers: "[회귀의 기억] 위기에 처한 소년들의 다급하고 절망적인 눈빛이 뇌리를 스칩니다.",
                choices: [
                    { text: "나까지 조직의 표적이 될 수 있으니 골목 반대편으로 빠르게 도망친다.", requiredPolicy: null, effect: { dignity: -60, tags: ["-보복범죄피해"] }, nextEvent: "SYSTEM_REQ_DEATH" },
                    { text: "상주 순찰대에 즉각 무전을 치고 소년들을 세이프하우스로 피신시킨다.", requiredPolicy: null, effect: { dignity: +20, tags: ["+아동보호"] }, nextEvent: "NEXT_DAY" }
                ]
            }
        ]
    },
    1: {
        dayLabel: "D-1",
        topic: "종합적인 삶의 질",
        events: [
            {
                id: "M1_MAIN",
                skipIfPolicy: null,
                descriptions: "수많은 루프의 피와 노력 끝에 기업의 상생, 주거 보장, 의료, 안심 치안이 모두 완성되었습니다. 하지만 이 완벽해 보이는 연대망은 한 명의 방관으로도 즉시 도미노처럼 무너질 수 있습니다. 당신은 오늘 어떤 미래를 선택하겠습니까?",
                loopTriggers: "[회귀의 기억] 마침내 모든 인프라가 갖춰진 진정한 마지막 날입니다. 당신이 지닌 기억의 무게만큼 올바른 선언을 내리십시오.",
                choices: [
                    { text: "나 한 몸 안락해졌으니 타인의 고통을 지우고 이기적인 소비 만능주의로 돌입한다.", requiredPolicy: null, effect: { dignity: -100, tags: ["-연대해체"] }, nextEvent: "SYSTEM_REQ_DEATH" },
                    { text: "[지성인의 약속] 지속가능한 내일을 위해 공정무역 소비에 임하고 약자를 보호하는 사회 시스템을 영원히 지지한다.", requiredPolicy: null, effect: { dignity: +50, tags: ["+존엄성완성"] }, nextEvent: "BEFORE_ENDING_NOTICE" }
                ]
            }
        ]
    }
};

let gameState = {
    currentDay: 5,
    currentEventId: "M5_MAIN",
    dignity: 25,
    unlockedPolicies: [],
    loopCount: 0,
    gameStarted: false,
    visitedEvents: new Set()
};

let typewriterTimer = null; 

const bgDayDisplay = document.getElementById("bg-day-display");
const dignityBar = document.getElementById("dignity-bar");
const statusEffects = document.getElementById("status-effects");
const currentStoryBox = document.getElementById("current-story-box");
const historyContainer = document.getElementById("history-container");
const historyScrollBox = document.getElementById("history-scroll-box");
const choiceBox = document.getElementById("choice-box");
const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlay-text");
const daySplashText = document.getElementById("day-splash-text");

window.addEventListener("DOMContentLoaded", () => {
    showGamePrologue();
});

function showGamePrologue() {
    overlay.classList.remove("hidden");
    overlayText.innerHTML = `
        <div style="animation: fadeIn 0.8s ease; text-align: left; max-width: 550px; margin: 0 auto;">
            <div style="font-size: 1.5rem; color: var(--neon-blue); font-weight: bold; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">PROLOGUE: 약속의 5일</div>
            <div style="font-size: 1.05rem; line-height: 1.9; margin-bottom: 35px; color: #e2e8f0; white-space: pre-line;">
                당신은 이 참혹하고 낙후된 도시 외곽의 슬럼가, '누에바'에 살고 있습니다.
                
                지옥 같은 환경이지만 딱 <span style="color:var(--neon-green); font-weight:bold;">'5일(D-5)'</span>만 무사히 인간답게 버텨내면, 외곽 특별 이주 허가권을 얻어 이 악순환의 굴레와 빈민가를 영원히 탈출할 수 있습니다.
                
                하지만 가난과 인프라 붕괴는 개인의 의지만으로 극복할 수 없습니다. 매일 찾아오는 극단적 위기 속에서 당신의 '인간의 존엄성' 수치를 지켜내고 마지막 날에 도달하십시오.
            </div>
            <button id="start-game-btn" class="btn-overlay-action blue-hover">
                [가혹한 생존 여정 시작하기]
            </button>
        </div>
    `;

    document.getElementById("start-game-btn").addEventListener("click", () => {
        overlay.classList.add("hidden");
        gameState.gameStarted = true;
        initGame();
    });
}

function initGame() {
    updateUI();
    historyContainer.innerHTML = "";
    triggerDaySplash(`D-${gameState.currentDay}`, () => {
        presentEvent(gameState.currentDay, gameState.currentEventId);
    });
}

function updateUI() {
    bgDayDisplay.innerText = `D-${gameState.currentDay}`;
    document.title = `D-${gameState.currentDay} | 빈민가에서의 마지막`;
    
    dignityBar.style.width = `${gameState.dignity}%`;
    if (gameState.dignity <= 20) document.body.classList.add("danger-bg");
    else document.body.classList.remove("danger-bg");
}

function triggerDaySplash(text, callback) {
    daySplashText.innerText = text;
    daySplashText.classList.remove("animate-splash");
    void daySplashText.offsetWidth; 
    daySplashText.classList.add("animate-splash");

    setTimeout(() => {
        if (callback) callback();
    }, 900);
}

function runTypewriter(targetHtml, callback) {
    if (typewriterTimer) clearInterval(typewriterTimer);
    
    choiceBox.innerHTML = ""; 
    currentStoryBox.innerHTML = "";

    let index = 0;
    const parser = new DOMParser();
    const doc = parser.parseFromString(targetHtml, 'text/html');
    const fullText = doc.body.innerHTML; 

    let currentProgress = "";
    
    typewriterTimer = setInterval(() => {
        if (fullText[index] === '<') {
            let tagCloseIndex = fullText.indexOf('>', index);
            if (tagCloseIndex !== -1) {
                index = tagCloseIndex + 1;
            }
        } else {
            index++;
        }

        currentProgress = fullText.substring(0, index);
        currentStoryBox.innerHTML = currentProgress;

        if (index >= fullText.length) {
            clearInterval(typewriterTimer);
            typewriterTimer = null;
            if (callback) callback(); 
        }
    }, 7); 
}

function presentEvent(dayNum, eventId) {
    currentStoryBox.className = "";

    const dayData = storyData[dayNum];
    let targetEvent = dayData.events.find(e => e.id === eventId);
    
    if (!targetEvent) return;

    if (targetEvent.skipIfPolicy && gameState.unlockedPolicies.includes(targetEvent.skipIfPolicy)) {
        processNextStep(targetEvent.choices[1]); 
        return;
    }

    let combinedHtml = `<strong>[DAY ${dayNum} - ${dayData.topic}]</strong><br><br>${targetEvent.descriptions}`;
    if (gameState.loopCount > 0 && gameState.visitedEvents.has(eventId) && targetEvent.loopTriggers) {
        combinedHtml += `<br><br><span style="color:var(--neon-blue); font-weight:bold; display:inline-block; animation:fadeIn 0.5s;">${targetEvent.loopTriggers}</span>`;
    }

    gameState.visitedEvents.add(eventId);

    runTypewriter(combinedHtml, () => {
        renderChoices(targetEvent.choices);
    });
}

function renderChoices(choices) {
    choiceBox.innerHTML = "";
    
    let shuffledChoices = [...choices];
    for (let i = shuffledChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
    }

    shuffledChoices.forEach(choice => {
        const button = document.createElement("button");
        button.classList.add("btn-choice");

        if (choice.requiredPolicy && !gameState.unlockedPolicies.includes(choice.requiredPolicy)) {
            button.innerText = `[잠김 - 정책미비] ${choice.text}`;
            button.classList.add("locked");
            button.disabled = true;
        } else {
            button.innerText = choice.text;
            button.addEventListener("click", () => handleChoice(choice));
        }
        choiceBox.appendChild(button);
    });
}

function handleChoice(choice) {
    currentStoryBox.className = ""; 
    if (choice.effect.dignity > 0) {
        currentStoryBox.classList.add("pulse-plus"); 
    } else if (choice.effect.dignity < 0) {
        currentStoryBox.classList.add("pulse-minus"); 
    }

    const pastLog = document.createElement("div");
    pastLog.classList.add("log-item");
    pastLog.innerHTML = currentStoryBox.innerHTML;
    historyContainer.appendChild(pastLog);

    const playerLog = document.createElement("div");
    playerLog.classList.add("log-player-choice");
    playerLog.innerText = `선택: ${choice.text.replace("[정책 해금] ", "")}`;
    historyContainer.appendChild(playerLog);

    historyScrollBox.scrollTop = historyScrollBox.scrollHeight;

    gameState.dignity += choice.effect.dignity;
    if (gameState.dignity > 100) gameState.dignity = 100;
    if (gameState.dignity < 0) gameState.dignity = 0;

    showEffectTags(choice.effect.tags);
    updateUI();

    if (gameState.dignity <= 0 || choice.nextEvent === "SYSTEM_REQ_DEATH") {
        const isOfficialPolicyDeath = (choice.nextEvent === "SYSTEM_REQ_DEATH");
        gameState.dignity = 0;
        updateUI();
        setTimeout(() => triggerDeathLoop(isOfficialPolicyDeath), 500);
    } else {
        processNextStep(choice);
    }
}

function processNextStep(choice) {
    if (choice.nextEvent === "BEFORE_ENDING_NOTICE") {
        triggerBeforeEndingNotice();
    } else if (choice.nextEvent === "NEXT_DAY") {
        gameState.currentDay -= 1;
        gameState.currentEventId = storyData[gameState.currentDay].events[0].id;
        updateUI();
        
        triggerDaySplash(`D-${gameState.currentDay}`, () => {
            presentEvent(gameState.currentDay, gameState.currentEventId);
        });
    } else {
        gameState.currentEventId = choice.nextEvent;
        presentEvent(gameState.currentDay, gameState.currentEventId);
    }
}

function showEffectTags(tags) {
    statusEffects.innerHTML = "";
    tags.forEach(tag => {
        const span = document.createElement("span");
        span.classList.add("effect-tag", tag.startsWith("+") ? "plus" : "minus");
        span.innerText = tag;
        statusEffects.appendChild(span);
    });
}

function triggerDeathLoop(isOfficialPolicyDeath) {
    if (typewriterTimer) clearInterval(typewriterTimer); 
    document.body.classList.add("glitch-effect");
    
    setTimeout(() => {
        document.body.classList.remove("glitch-effect");
        overlay.classList.remove("hidden");
        
        let displayHtml = "";

        // --------------------------------==========================================
        // [NEW INTERACT] D-1 구간 이기적 이탈 선택 시 발동하는 메타픽션 이스터에그 분기
        // --------------------------------==========================================
        if (gameState.currentDay === 1 && !isOfficialPolicyDeath) {
            displayHtml = `
                <div class="easteregg-glow-box" style="text-align:left; max-width:550px;">
                    <div style="font-size: 1.8rem; color: var(--neon-red); font-weight: 900; margin-bottom: 15px; letter-spacing:1px;">[SYSTEM_FATAL_ERROR] 동기화 실패</div>
                    <div style="font-size:1.1rem; line-height:1.9; margin-bottom:25px; color:#ffffff; font-weight:bold;">
                        완벽한 제도 연대를 구축해 두고도, 마지막 순간 이기적인 방관을 선택하셨군요.<br><br>
                        기억하십시오. 시스템이 인간을 구원하는 것이 아닙니다. 당신이 지닌 '방관과 외면'이야말로 이 도시를 수천 번 파괴해 온 진짜 재앙입니다.
                    </div>
                    <button id="loop-reset-btn" class="btn-overlay-action" style="border:1px solid var(--neon-red); color:var(--neon-red); font-weight:900;">[관찰자 권한 초기화 및 D-5 재접속]</button>
                </div>
            `;
        } else if (isOfficialPolicyDeath) {
            gameState.loopCount++;
            let title = "", desc = "";

            if (gameState.currentDay === 5) {
                gameState.unlockedPolicies.push("SDGs_8_EMPLOYMENT");
                title = "SDGs 8: 양질의 일자리 보장 정책 수립";
                desc = "다국적 기업과 국가 공익 위원회가 결탁하여 빈민가 취약계층 노동자들에게 안전장치를 지원하는 고용 촉진법이 제정되었습니다.";
            } else if (gameState.currentDay === 4) {
                gameState.unlockedPolicies.push("SDGs_11_HOUSING");
                title = "SDGs 11: 주거 권리 인권 보장책 발동";
                desc = "무분별한 강제 철거를 전면 금지하고 소외 구역 주민들에게 임시 안전 임대 주택 인프라를 공급하는 도시 정비 조례가 통과되었습니다.";
            } else if (gameState.currentDay === 3) {
                gameState.unlockedPolicies.push("SDGs_3_HEALTH");
                title = "SDGs 3: 소외지역 거점 공공의료 체계 구축";
                desc = "오염수 배출 공장을 전면 영업 정지 처분하고, 빈민가 내에 무상 백신 공급 및 24시간 공공 보건 의료 거점 센터가 설립되었습니다.";
            } else if (gameState.currentDay === 2) {
                gameState.unlockedPolicies.push("SDGs_11_SAFETY");
                title = "SDGs 11: 공동체 자치 치안 전담 안전망 확립";
                desc = "범죄 조직의 소탕과 동시에 골목 구석구석에 야간 스마트 안심등이 배치되고 주민 자치 순찰 시스템과 전담 공권력이 확충되었습니다.";
            } else if (gameState.currentDay === 1) {
                // 정상 루트 클리어 실패 예외처리 방어막
                title = "루프 모순 감지";
                desc = "시스템의 허점을 보완하십시오.";
            }

            displayHtml = `
                <div class="policy-glow-box">
                    <div class="policy-title">${title}</div>
                    <div style="font-size:1.15rem; line-height:1.9; margin-bottom:25px; color:#fff;">${desc}</div>
                    <button id="loop-reset-btn" class="btn-overlay-action blue-hover">[변화된 사회 제도를 수립하고 첫날(D-5)의 굴레로 돌아가기]</button>
                </div>
            `;
        } else {
            displayHtml = `
                <div style="border: 1px solid var(--neon-red); padding: 30px; background: rgba(255,51,68,0.05); text-align:left; max-width:550px;">
                    <div style="font-size: 1.8rem; color: var(--neon-red); font-weight: bold; margin-bottom: 15px;">생존 실패</div>
                    <div style="font-size:1.05rem; line-height:1.8; margin-bottom:25px; color:#cbd5e1;">제도적 장치가 확보되지 않았거나 잘못된 판단으로 존엄성이 완전히 소멸되었습니다. 이 회귀는 정식 법안 연대로 기록되지 않습니다.</div>
                    <button id="loop-reset-btn" class="btn-overlay-action" style="border:1px solid var(--neon-red); color:var(--neon-red);">[D-5 첫 시점으로 다시 도전하기]</button>
                </div>
            `;
            
            setTimeout(() => {
                const btn = document.getElementById("loop-reset-btn");
                if(btn){
                    btn.onmouseover = () => { btn.style.background = "var(--neon-red)"; btn.style.color = "#000"; btn.style.boxShadow = "0 0 15px var(--neon-red)"; };
                    btn.onmouseout = () => { btn.style.background = "transparent"; btn.style.color = "var(--neon-red)"; btn.style.boxShadow = "none"; };
                }
            }, 10);
        }

        overlayText.innerHTML = displayHtml;
        
        document.getElementById("loop-reset-btn").addEventListener("click", () => {
            gameState.currentDay = 5;
            gameState.currentEventId = "M5_MAIN";
            gameState.dignity = 25;
            overlay.classList.add("hidden");
            initGame();
        });
    }, 800);
}

function triggerBeforeEndingNotice() {
    overlay.classList.remove("hidden");
    overlayText.innerHTML = `
        <div style="animation: fadeIn 0.8s ease; max-width:550px;">
            <div style="font-size: 1.6rem; color: var(--neon-blue); font-weight: bold; margin-bottom: 20px;">연대의 결실</div>
            <div style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 30px; text-align:left; color:#e2e8f0;">
                당신은 마침내 무한 빈곤의 루프를 타파할 제도적 연대의 가치를 증명해냈습니다.\n\n
                그리하여 마침내 다가온 약속의 날을 마주합니다.
            </div>
            <button id="trigger-counter-btn" class="btn-overlay-action blue-hover">[시간의 지평 확인하기]</button>
        </div>
    `;

    document.getElementById("trigger-counter-btn").addEventListener("click", () => {
        executeDDayCounter();
    });
}

// --------------------------------==========================================
// [MODIFIED INTERACT] D-999 폭주 카운트업 전면 고도화 (진동, 불규칙 과부하 및 CRT 연출)
// --------------------------------==========================================
// --------------------------------==========================================
// [MODIFIED] D-999 폭주 카운트업 연출: 도달 후 정적 유지 시간을 1초로 단축
// --------------------------------==========================================
function executeDDayCounter() {
    overlay.style.backgroundColor = "#000000"; 
    overlayText.innerHTML = `<div id="counter-display" style="font-size:5rem; font-weight:900; color:#ffffff; transition: all 0.1s ease-in-out;">D-DAY</div>`;
    
    setTimeout(() => {
        const displayDiv = document.getElementById("counter-display");
        let sequence = ["D-1", "D-2", "D-3", "D-4", "D-5"];
        let seqIndex = 0;

        const sequenceTimer = setInterval(() => {
            if (seqIndex < sequence.length) {
                displayDiv.innerText = sequence[seqIndex];
                
                let ratio = (seqIndex + 1) / sequence.length;
                let gbValue = Math.max(120, 255 - Math.floor(ratio * 135));
                displayDiv.style.color = `rgb(255, ${gbValue}, ${gbValue})`;
                displayDiv.style.textShadow = `0 0 ${15 + (seqIndex * 6)}px #ff3344`;
                
                seqIndex++;
            } else {
                clearInterval(sequenceTimer);
                
                document.querySelector(".game-container").classList.add("screen-shake");
                bgDayDisplay.style.color = "rgba(255, 51, 68, 0.08)";
                
                let dDaySubNumber = 5;
                
                const fastTimer = setInterval(() => {
                    if (dDaySubNumber < 999) {
                        dDaySubNumber += Math.floor(Math.random() * 85) + 35; 
                        if (dDaySubNumber > 999) dDaySubNumber = 999;

                        let redRatio = dDaySubNumber / 999;
                        let gbValue = Math.max(0, 255 - Math.floor(redRatio * 255)); 
                        
                        displayDiv.style.color = `rgb(255, ${gbValue}, ${gbValue})`;
                        displayDiv.style.textShadow = `0 0 ${redRatio * 50}px #ff3344`;
                        displayDiv.style.transform = `scale(${1 + (redRatio * 0.2)})`; 
                        displayDiv.innerText = `D-${dDaySubNumber}`;
                        bgDayDisplay.innerText = `D-${dDaySubNumber}`;
                    } else {
                        clearInterval(fastTimer);
                        
                        // D-999 도달 완료 시점: 모든 진동과 소음이 순간적으로 '우뚝' 멈춤
                        document.querySelector(".game-container").classList.remove("screen-shake");
                        displayDiv.style.transform = "scale(1.25)";
                        displayDiv.style.animation = "glitch 0.1s infinite"; 
                        document.title = "D-999 | 끝없는 생존의 루프";
                        
                        // --------------------------------==========================================
                        // [수정 포인트] 플레이어가 인지하자마자 쳐내도록 대기 마진을 1초(1000ms)로 변경
                        // --------------------------------==========================================
                        setTimeout(() => {
                            displayDiv.style.animation = "none";
                            displayDiv.classList.add("crt-blackout"); // 암전 애니메이션 트리거 (0.4초 소요)
                            
                            setTimeout(() => {
                                overlayText.innerHTML = "";
                                // 암전 상태를 잠시 유지한 후 서약 폼 페이드인
                                setTimeout(renderFinalPledgeScreen, 2000);
                            }, 400); 

                        }, 1000); // 3000에서 1000으로 수정 완료
                    }
                }, 25); 
            }
        }, 550); 

    }, 2000); 
}

function renderFinalPledgeScreen() {
    const finalContainer = document.createElement("div");
    finalContainer.classList.add("cinematic-fade-in");
    finalContainer.style.maxWidth = "650px";
    finalContainer.style.margin = "0 auto";

    const msgDiv = document.createElement("div");
    msgDiv.style.marginBottom = "30px";
    msgDiv.style.fontSize = "1.15rem";
    msgDiv.style.lineHeight = "1.9";
    msgDiv.style.textAlign = "left";
    msgDiv.innerText = "당신에게는 수많은 회귀 끝에 도달한 단 5일간의 가혹한 시뮬레이션이었겠지만...\n\n이 지구 반대편 현실의 수많은 소외 지대에는 5일도, 999일도 아닌 평생 동안 이 안전망 부재의 지옥 속을 살아가는 취약계층 주민들이 실존합니다.\n\n도시화의 그늘을 지우고 이 빈곤의 무한 루프를 완전히 끊어내기 위해, 당신은 오늘 어떤 현실의 연대를 지지하시겠습니까?";
    finalContainer.appendChild(msgDiv);

    const achievementTitle = document.createElement("div");
    achievementTitle.style.fontSize = "0.9rem";
    achievementTitle.style.color = "var(--neon-green)";
    achievementTitle.style.fontWeight = "bold";
    achievementTitle.style.textAlign = "left";
    achievementTitle.style.marginBottom = "12px";
    achievementTitle.innerText = "◀ 당신의 루프로 획득한 국가와 기업의 시스템 연대 자산 ▶";
    finalContainer.appendChild(achievementTitle);

    const badgeContainer = document.createElement("div");
    badgeContainer.classList.add("final-achievements-container");

    if (gameState.unlockedPolicies.includes("SDGs_8_EMPLOYMENT")) {
        badgeContainer.innerHTML += `<div class="achievement-badge">■ [기업/노동상생] SDGs 8 취약계층 노동자 안전 장비 지원 및 공정무역 임금 보장 조례 확립</div>`;
    }
    if (gameState.unlockedPolicies.includes("SDGs_11_HOUSING")) {
        badgeContainer.innerHTML += `<div class="achievement-badge">■ [국가/안전주거] SDGs 11 무분별한 불법 강제 철거 전면 금지 및 공공 주거 인권 보호법 발동</div>`;
    }
    if (gameState.unlockedPolicies.includes("SDGs_3_HEALTH")) {
        badgeContainer.innerHTML += `<div class="achievement-badge">■ [정부/보건위생] SDGs 3 오염수 투기 공장 영업 정지 및 소외지역 거점 무상 의료 보건소 개설</div>`;
    }
    if (gameState.unlockedPolicies.includes("SDGs_11_SAFETY")) {
        badgeContainer.innerHTML += `<div class="achievement-badge">■ [공동체/치안망] SDGs 11 자치 순찰 시스템 연계, 전담 경찰관 상주 및 골목 스마트 안심등 확충</div>`;
    }
    finalContainer.appendChild(badgeContainer);

    const endActionNotice = document.createElement("button");
    endActionNotice.id = "final-pledge-btn";
    endActionNotice.classList.add("btn-overlay-action", "green-hover");
    endActionNotice.style.marginTop = "25px";
    endActionNotice.innerText = "[사소한 소비 윤리와 지속가능발전목표(SDGs)에 깊이 관심을 가질 것을 서약하며 여정 마치기]";
    
    endActionNotice.addEventListener("click", () => {
        overlayText.innerHTML = "<div style='color:var(--neon-green); font-size:1.5rem; font-weight:bold; text-shadow:0 0 10px var(--neon-green);'>서약이 성공적으로 등록되었습니다.</div><br><br><div style='font-size:1.05rem;'>당신의 관심이 현실의 슬럼가를 바꾸는 시스템 정책을 견인합니다.\n\n감사합니다.</div>";
        setTimeout(() => {
            window.close();
            document.body.innerHTML = "<div style='color:#fff; text-align:center; font-size:1.1rem; letter-spacing:1px; padding:20px;'>연대가 완료되었습니다. 시뮬레이터를 종료하셔도 좋습니다.</div>";
            document.body.style.backgroundColor = "#000000";
        }, 3000);
    });
    
    finalContainer.appendChild(endActionNotice);
    overlayText.appendChild(finalContainer);
}