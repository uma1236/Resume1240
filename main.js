function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}	
getfile("main.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	Edudetails(data.Education);
	languages(data.Languages);
	Skills(data.Skills);
}

  )
var left=document.querySelector(".left");
function profile(pro){
	var img=document.createElement("img");
	img.src=pro.img;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=pro.name;
	left.appendChild(h2);
	var h3=document.createElement("h3");
	h3.textContent=pro.roll;
	left.appendChild(h3);
	var h2=document.createElement("h2");
	h2.textContent=pro.college;
	left.appendChild(h2);
	var h2=document.createElement("h2");
	h2.textContent=pro.place;
	left.appendChild(h2);
}
var right=document.querySelector(".right");
function career(c){
	var h2=document.createElement("h2");
	h2.textContent="career objective";
	right.appendChild(h2);
	var hr=document.createElement("h2");
	right.appendChild(hr);
	var p=document.createElement("p");
	p.textContent=c.info;
	right.appendChild(p);
}
function Edudetails(e){
	var h2=document.createElement("h2");
	h2.textContent="Educaton details";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var tb=document.createElement("table");
	tb.border="2";
	var tr1="<tr><td>degree</td><td>Institute</td><td>Year of pass</td></tr>";
	var tr2="";
	for(i=0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].degree+"</td><td>"+e[i].Institute+"</td><td>"+e[i].Yearofpass+"</td></tr>";
	}
	tb.innerHTML=tr1+tr2;
	right.appendChild(tb);

}
function languages(l){
	var h2=document.createElement("h2");
	h2.textContent="Languages";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);

	var ul=document.createElement("ul");

	
	for(i=0;i<l.length;i++){
		var li=document.createElement("li");
		li.textContent=l[i].lang;
		ul.appendChild(li);
	}
	right.appendChild(ul);

}
function Skills(s){
	var h2=document.createElement("h2");
	h2.textContent="skills";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<s.length;i++){
		var li=document.createElement("li");
		li.textContent=s[i].title+":"+s[i].content;
		ul.appendChild(li)
	}
}


