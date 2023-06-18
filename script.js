const quotes = [
  "The only way to do great work is to love what  you do. -   STEVE JOBS",
  "Sucess is not final, faliure is not fatal: It's the courage to continue that counts.   -   Winston Churchill",
  "The future belongs to those who believe in  the beauty of their dreams.    -   Eleanor Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The best way to predict the futureis to create it. - Peter Drucker",
  "Single and ready to get nervous around anyone I find Attractive! - Yesh Rikki",
  "An intelligent man is sometimes forced to be drunk to spend time with his fools. -Ernst Hemmingway",
  "This embarrassment thing is all in your head. - Pheobe Buffay",
  "See, I learn something whenever I spend time with you. - Phil Dunphy",
  "All right, everybody. Just try to put a brave face on. - Michael Scott",
  "I was the warm little center that the life of this world crowded around. - The Narrator",
  "Talent hits a target no one else can hit. Genius hits a target no one else can see. - Arthur Schopenhaue",
  "That thing I could have done right away but didn't and now it's a big fucking problem. -Yesh Rikki",
  "The only way to forget the mistakes you made in the past is to make even bigger and graver mistakes in the present. - unanomous",
  "All this overthinking and I still make the worst decisions. - Yesh Rikki",
  "if you put your left shoe on the wrong foot, it's on the right foot. - Yesh Rikki",
  "If you cannot explain something in simple terms, you don't understand it. - Richard P.feynman",
  "He who learns but does not think, is lost. He who thinks but doesn't learn is in great danger. -Confucius",
  "Sometimes, you'll be right person for someone who isn't ready for the RIGHT PERSON. - Yesh Rikki",
  "What if everything You're going Through is preparing you for, What you asked for? - Unanomous",
  "I don't care who is doing better than me. I'm doing better that I was last year. - Yesh Rikki",
  "Everything on the internet is fake. - Albert Einsten",
  "I'm at a point in my life where I don't even know the point I'm at, but I'm at a point. -Yesh Rikki",
  "Don't be mad at lazy people. They don't do anything. -Unanomous",
  "Due to personal reasons I'll be drinking again this weekend. - Yesh Rikki",
  "Don't waste your time on jelousy, sometimes you're ahead, sometimes you're behind. the race is long and in the end, it's only with yourself. -Unanomous",
  "Take it day by day, don't stress too much about tomorrow. - Yesh Rikki",
  "If you continue to 'wait until you're ready', yoe'll be waiting for the rest of your life. -Unanomous",
  "You can't heal if you keep pretending you're not hurt. -Unanomous",
  "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
  "My favorite childhood memory is my back not hurting. - Unanomous",
  "Don't find fault, find a remedy: anybody can complain. - Henry Ford",
  "It's okay to miss people and still not want them in your life. -Yesh Rikki",
  "The only way to win is to learn faster than anyone else. - Eric Ries",
  "Be kind to the past versions of yourself that didn't know the things you know now. - Unanomous",
  "Never memorize something that you can look up. - Albert Einstein",
  "Yesterday 'you said' tomorrow! - Yesh Rikki",
  "Born with Smirk, SMARTASS For Life! - Lucia Pawan",
  // inserting 100 more quotes
  "The future belongs to those who believe in the beauty of their dreams.- Eleanor Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Success is not just about making money. It's about making a difference. - Unknown",
  "The road to success is always under construction. - Lily Tomlin",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Don't be distracted by criticism. Remember, the only taste of success some people get is to take a bite out of you. - Zig Ziglar",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Success is not about the destination, but the journey. - Zig Ziglar",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Success is not a result of spontaneous combustion. You must set yourself on fire. - Arnold H. Glasow",
  "The secret of success is to know something nobody else knows. - Aristotle Onassis",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The best revenge is massive success. - Frank Sinatra",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Failure is the condiment that gives success its flavor. - Truman Capote",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "The secret to success is to know something nobody else knows. - Aristotle Onassis",
  "The harder I work, the luckier I get. - Samuel Goldwyn",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
  "Success is not just about making money. It's about making a difference. - Unknown",
  "The road to success is always under construction. - Lily Tomlin",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Don't be distracted by criticism. Remember, the only taste of success some people get is to take a bite out of you. - Zig Ziglar",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Success is not about the destination, but the journey. - Zig Ziglar",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Success is not a result of spontaneous combustion. You must set yourself on fire. - Arnold H. Glasow",
  "The secret of success is to know something nobody else knows. - Aristotle Onassis",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The best revenge is massive success. - Frank Sinatra",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Failure is the condiment that gives success its flavor. - Truman Capote",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "The secret to success is to know something nobody else knows. - Aristotle Onassis",
  "The harder I work, the luckier I get. - Samuel Goldwyn",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
  "Success is not just about making money. It's about making a difference. - Unknown",
  "The road to success is always under construction. - Lily Tomlin",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Don't be distracted by criticism. Remember, the only taste of success some people get is to take a bite out of you. - Zig Ziglar",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Success is not about the destination, but the journey. - Zig Ziglar",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Success is not a result of spontaneous combustion. You must set yourself on fire. - Arnold H. Glasow",
  "The secret of success is to know something nobody else knows. - Aristotle Onassis",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The best revenge is massive success. - Frank Sinatra",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Failure is the condiment that gives success its flavor. - Truman Capote",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "The secret to success is to know something nobody else knows. - Aristotle Onassis",
  "The harder I work, the luckier I get. - Samuel Goldwyn",
  "Opportunities don't happen. You create them. - Chris Grosser",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = quotes[randomIndex];
}
