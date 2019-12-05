(function(){var timer = setTimeout(this.marquee, 40);}());
    function marquee() {
        var scrollWidth = $('#affiche').width();
        var textWidth = $('.affiche_text').width();
        var i = scrollWidth;
        setInterval(function() {
            i--;
            if(i < -textWidth ) {
                i = scrollWidth;
            }
            $('.affiche_text').animate({'left': i+'px'}, 1);
        }, 20);
    }

var btn = document.getElementById('open_btn');
var btn1 = document.getElementById('open_btn1');
var div = document.getElementById('background');
var div1 = document.getElementById('background1');
var close = document.getElementById('close-button');
var like = document.getElementById('like-btn');
var p1 = document.getElementById('p1');
 
btn.onclick = function show() {
	div.style.display = "block";
}
btn1.onclick = function show1() {
	div1.style.display = "block";
	var y = document.getElementById("name").value;
	document.getElementById("p2").innerHTML = "Hi,"+y+ ". If you see this page, the endless alert web server is successfully installed and working. Feel free to see more content by pressing “LIKE”. You also have all the right to quit the website by simply click “EXIT” button at any time. Like or exit button;";
} 
window.onclick = function close(e) {
	if (e.target == div) {
		div.style.display = "none";
	}
}
var count =0;
var x=6;
function textModify()
{
    var obj = document.getElementById("p2");
    var number = Math.floor(Math.random() * 15); 
	var news = ["Power need not take the form of coercion.", "The greater power is, the more quietly it works.", "Today, power is assuming increasingly permissive forms.","Power is shedding its negativity and presenting itself as freedom.","IT escapes all visibility.","Ultimate power is hiding","Power is smart","News","A Celebrity broke up with other celebrity","A Celebrity released an new album","Fun",
	"Instagram feeds","What’s trending","Breaking News: Serious water leakage during Winter of xxxx in Toronto."];
    obj.innerText= news[number];
	count=count+1;
}
function exit()
{
    var obj = document.getElementById("p2");
    obj.innerText= "you click like"  + count +"times";
	setInterval(go, 1000);
}
function go(){
		x--;
			if(x>0){
			document.getElementById("sp").innerHTML="you will leave in"+x+"s";  //每次设置的x的值都不一样了。
			}else{
			var number = Math.floor(Math.random() * 11);
			var web = ["https://trends.google.com/trends/trendingsearches/daily?geo=US", "https://trends.google.com/trends/trendingsearches/daily?geo=CA", "https://twitter.com/explore","https://twitter.com/i/moments?category_id=1","https://twitter.com/i/moments?category_id=2","https://twitter.com/i/moments?category_id=3","https://twitter.com/i/moments?category_id=4",
			"https://s.weibo.com/top/summary?cate=realtimehot","https://tophub.today/n/K7GdaMgdQy","https://www.google.com/search?q=cyber+monday&oq=cyber+monday&aqs=chrome.0.69i59j0j69i60j69i61l2j0.2703j0j4&sourceid=chrome&ie=UTF-8"];
			location.href= web[number];
			}
		}



