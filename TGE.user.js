// ==UserScript==
// @name        TGE
// @namespace   TGE
// @description Tremor Games Enhanced
// @include     http://www.tremorgames.com/index.php?action=shop*
// @include     http://www.tremorgames.com/?action=forums*
// @include     http://www.tremorgames.com/?action=viewforum*
// @include     http://www.tremorgames.com/?action=viewtopic&topicid=*
// @include     http://www.tremorgames.com/?action=viewgiveaways*
// @include     http://www.tremorgames.com/?action=editprofile*
// @include     http://www.tremorgames.com/editprofiles*
// @include     http://www.tremorgames.com/profiles*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @version     1.1
// @grant       GM_setValue 
// @grant       GM_getValue 
// @author      brenomirandi & Royalgamer06
// @downloadURL https://github.com/Breno-M/TGE/raw/9244238143704c9cad228e53f30878801c80a045/TGE.user.js
// ==/UserScript==


//***************************************************************************** Config

bGiveaways=GM_getValue("bGiveaways");
bUnsubscribe=GM_getValue("bUnsubscribe");
bLastpage=GM_getValue("bLastpage");
bLastpost=GM_getValue("bLastpost");
bSelectiveItems=GM_getValue("bSelectiveItems");
bWishlist=GM_getValue("bWishlist");

if(window.location.href.indexOf("editprofile") > -1) {

    $('div.reg_row:nth-child(18)').after('<div class="reg_row" id="tge_row0"><div class="reg_col1" style="color:#FFB300" width="80%"><b>TGE Features</b></div></div>');

    if(!bWishlist)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row4"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleW" id="toggleW">Wishlist: Off</button></div></div>');
    else if(bWishlist)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row4"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleW" id="toggleW">Wishlist: On</button></div></div>');

    if(!bGiveaways)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row3"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleG" id="toggleG">Giveaways: Off</button></div></div>');
    else if(bGiveaways)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row3"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleG" id="toggleG">Giveaways: On</button></div></div>');

    $('#tge_row3').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="reset" id="reset">Reset Subscriptions</button></div>');

    if(!bLastpage)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row2"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleL" id="toggleL">Last Page: Off</button></div></div>');
    else if(bLastpage)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row2"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleL" id="toggleL">Last Page: On</button></div></div>');

    if(!bUnsubscribe)
        $('#tge_row2').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleU" id="toggleU">Unsubscribe: Off</button></div>');
    else if(bUnsubscribe)
        $('#tge_row2').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleU" id="toggleU">Unsubscribe: On</button></div>');

    if(!bSelectiveItems)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row1"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleS" id="toggleS">Item Filter: Off</button></div></div>');
    else if(bSelectiveItems)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" id="tge_row1"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleS" id="toggleS">Item Filters: On</button></div></div>');

    if(!bLastpost)
        $('#tge_row1').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleP" id="toggleP">Last Post: Off</button></div>');
    else if(bLastpost)
        $('#tge_row1').after('<div class="reg_col5" style="margin-top: 10px;"><button style="width:150px;" onClick="return false;" class="cssbutton" value="toggleP" id="toggleP">Last Post: On</button></div>');

}

$("#reset").click (reset);
$("#toggleG").click (toggleG);
$("#toggleU").click (toggleU);
$("#toggleL").click (toggleL);
$("#toggleP").click (toggleP);
$("#toggleS").click (toggleS);
$("#toggleW").click (toggleW);

function toggleG(){ 
    if(!bGiveaways){
        GM_setValue("bGiveaways", true);
        bGiveaways=true;
        document.getElementById("toggleG").innerHTML="Giveaways: On";
    }
    else if(bGiveaways){
        GM_setValue("bGiveaways", false);
        bGiveaways=false;
        document.getElementById("toggleG").innerHTML="Giveaways: Off";
    }
}
function toggleU(){ 
    if(!bUnsubscribe){
        GM_setValue("bUnsubscribe", true);
        bUnsubscribe=true;
        document.getElementById("toggleU").innerHTML="Unsubscribe: On";
    }
    else if(bUnsubscribe){
        GM_setValue("bUnsubscribe", false);
        bUnsubscribe=false;
        document.getElementById("toggleU").innerHTML="Unsubscribe: Off";
    }
}
function toggleL(){ 
    if(!bLastpage){
        GM_setValue("bLastpage", true);
        bLastpage=true;
        document.getElementById("toggleL").innerHTML="Last Page: On";
    }
    else if(bLastpage){
        GM_setValue("bLastpage", false);
        bLastpage=false;
        document.getElementById("toggleL").innerHTML="Last Page: Off";
    }
}
function toggleP(){ 
    if(!bLastpost){
        GM_setValue("bLastpost", true);
        bLastpost=true;
        document.getElementById("toggleP").innerHTML="Last Post: On";
    }
    else if(bLastpost){
        GM_setValue("bLastpost", false);
        bLastpost=false;
        document.getElementById("toggleP").innerHTML="Last Post: Off";
    }
}
function toggleS(){ 
    if(!bSelectiveItems){
        GM_setValue("bSelectiveItems", true);
        bSelectiveItems=true;
        document.getElementById("toggleS").innerHTML="Item Filter: On";
    }
    else if(bSelectiveItems){
        GM_setValue("bSelectiveItems", false);
        bSelectiveItems=false;
        document.getElementById("toggleS").innerHTML="Item Filter: Off";
    }
}
function toggleW(){ 
    if(!bWishlist){
        GM_setValue("bWishlist", true);
        bWishlist=true;
        document.getElementById("toggleW").innerHTML="Wishlist: On";
    }
    else if(bWishlist){
        GM_setValue("bWishlist", false);
        bWishlist=false;
        document.getElementById("toggleW").innerHTML="Wishlist: Off";
    }
}
function reset(){ 
    GM_setValue("blocklist", null);
    $('#reset').text('Done!');
}

//***************************************************************************** Wishlist
if (window.location.href.indexOf("/profiles/") > -1 && bWishlist) {

    var btn = document.createElement("button"); 
    btn.setAttribute("id", "btnRemoveOwned");
    btn.setAttribute("class", "cssbutton");
    btn.setAttribute("style", "float: right; margin-top: 10px; margin-right: 10px;")
    btn.addEventListener("click", RemoveOwned, false);
    btn.innerHTML = "Remove owned items";

    setInterval(function() {
        if (document.getElementById("UserWishlistItems") !== null) {
            var attach = document.getElementById("uprofile_content");
            attach.insertBefore(btn, attach.firstChild);
        }
    }, 100);
}

function RemoveOwned() {
    var status_items = $(".tbl_last > tbody:nth-child(1) > tr > td:nth-child(3) > div:nth-child(3)");

    if (status_items.length > 0) {
        for (var i = 0; i < status_items.length; i++) {
            if (status_items[i].innerText == "You already have this item") {
                try {
                    status_items[i].parentElement.parentElement.lastChild.lastChild.lastChild.click();
                } catch(err) {}
            }
        }
    }
}

//***************************************************************************** Giveaways

var isChrome = !!window.chrome;

if(window.location.href.indexOf("viewgiveaways") > -1 && bGiveaways) {

    var buttons = document.getElementsByClassName("cssbutton");
    if(buttons.length>0){
        $('form[name=myform]').after('<br><button class="giveaway" value="giveaway" id="giveaway">Enter All</button>');
        $("#giveaway").click (giveaway);
    }
}

function giveaway(){
    $('form[name=myform]').after('<div id="info">Gathering giveaways...</div>');
    setTimeout(giveawayready, (buttons.length)*500);
}

function giveawayready(){
    $('#info').remove();
    alert("Done!");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("target", "_blank");
        buttons[i].click();
        location.reload();
    }
}

//***************************************************************************** Unsubscribe

var listval = GM_getValue("blocklist");
var blocklist = [];
if(listval)
{
    blocklist = blocklist.concat(JSON.parse(listval));
}
unsafeWindow.blocklist = blocklist;


function StoreDels0(){
    blocklist = blocklist.concat(hereHref[0].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[0].text+"')").hide();
}
function StoreDels2(){
    blocklist = blocklist.concat(hereHref[2].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[2].text+"')").hide();
}
function StoreDels4(){
    blocklist = blocklist.concat(hereHref[4].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[4].text+"')").hide();
}
function StoreDels6(){
    blocklist = blocklist.concat(hereHref[6].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[6].text+"')").hide();
}
function StoreDels8(){
    blocklist = blocklist.concat(hereHref[8].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[8].text+"')").hide();
}
function StoreDels10(){
    blocklist = blocklist.concat(hereHref[10].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[10].text+"')").hide();
}
function StoreDels12(){
    blocklist = blocklist.concat(hereHref[12].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[12].text+"')").hide();
}
function StoreDels14(){
    blocklist = blocklist.concat(hereHref[14].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[14].text+"')").hide();
}
function StoreDels16(){
    blocklist = blocklist.concat(hereHref[16].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[16].text+"')").hide();
}
function StoreDels18(){
    blocklist = blocklist.concat(hereHref[18].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[18].text+"')").hide();
}
function StoreDels20(){
    blocklist = blocklist.concat(hereHref[20].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[20].text+"')").hide();
}

if(window.location.href=="http://www.tremorgames.com/?action=forums" && bUnsubscribe){
    var hereTd = document.getElementsByTagName("table");
    var hereHref = hereTd[5].getElementsByTagName('a');

    for (var J = hereHref.length - 1;  J >= 0;  --J) {
        if (blocklist.indexOf (hereHref[J].text) >= 0) {
            $("tr:contains('"+hereHref[J].text+"')").remove();
        }
    }

    for (var k=0; k < hereHref.length - 1; k++){
        if(k%2==0)
            $(hereHref[k]).before('<button class="myButton" value="X" id="tomate'+k+'">X</button>&nbsp &nbsp');
    }

    $("#tomate0").click (StoreDels0);
    $("#tomate2").click (StoreDels2);
    $("#tomate4").click (StoreDels4);
    $("#tomate6").click (StoreDels6);
    $("#tomate8").click (StoreDels8);
    $("#tomate10").click (StoreDels10);
    $("#tomate12").click (StoreDels12);
    $("#tomate14").click (StoreDels14);
    $("#tomate16").click (StoreDels16);
    $("#tomate18").click (StoreDels18);
    $("#tomate20").click (StoreDels20);

}


//***************************************************************************** Last page
if(((window.location.href.indexOf("action=forums") > -1)||(window.location.href.indexOf("action=viewforum") > -1)) && bLastpage) {
    var links = document.evaluate("//a[contains(@href, 'm/profiles/')]", document, null, 
                                  XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 
    var pg = Math.pow(8, 4);
    var linksT = document.evaluate("//a[contains(@href, 'topicid')]", document, null, 
                                   XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    var alerts = document.getElementsByClassName('alert alert-info');
    var alertCount = 0;

    for (var j=0; j <= alerts.length; j++) 
        if (alerts.length > j)
            alertCount = 1;

    for (var i=2 ; i < links.snapshotLength; i++) 
    { 
        var thisLink = links.snapshotItem(i);    
        var thisLinkT = linksT.snapshotItem((i-2) + alertCount);   
        thisLink.href = thisLinkT.href+'&page='+pg; 
        thisLink.text += ' »';  
    } 
}

$(document).ready(function () {
    if(window.location.href.indexOf("page=4096") > -1 && bLastpost) {
        var ids = $('.forumpost');
        location.hash = ids[ids.length-1].id;
    }
});


//***************************************************************************** Selective items
if(bSelectiveItems){
    test=GM_getValue("test");

    if(!test)
        $("div.shop_catbg_middle_right").append('| &nbsp <button class="toggle" value="toggle" id="toggle">$ Off</button>');
    else if(test)
        $("div.shop_catbg_middle_right").append('| &nbsp <button class="toggle" value="toggle" id="toggle">$ On</button>');

    $("#toggle").click (toggle);

    var coins;

    var points = document.evaluate("//a[contains(@href, 'http://www.tremorgames.com/?action=points')]", document, null, 
                                   XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 

    for (var i=1; i < points.snapshotLength; i++) 
    { 
        var thisPoints = points.snapshotItem(i);    
        coins=thisPoints.text;
    } 

    if(isChrome){
        for (var h=1; h <= coins.length; h++){
            coins= coins.substring(0,h-1) + coins.substring(h, coins.length);
        }
    }

    var solidPrice=[];
    var allPrices = $( ".shop_item_box_type:contains('Coins')" );

    for (var k=0; k < allPrices.length; k++) 
    {
        solidPrice[k]=allPrices[k].innerHTML;
        solidPrice[k]= solidPrice[k].substr(0, solidPrice[k].length - 26);
    }
    var points=parseInt(coins);

    HideShow();

}

function HideShow(){
    for (var j=0; j < solidPrice.length; j++) 
    { 
        if(points<=solidPrice[j]){
            if(test)
                $("div.shop_item_box:contains('" + solidPrice[j] + " Tremor')").hide ();
            else if(!test)
                $("div.shop_item_box:contains('" + solidPrice[j] + " Tremor')").show ();
        }
    }
}

function toggle(){ 
    if(!test){
        GM_setValue("test", true);
        test=true;
        document.getElementById("toggle").innerHTML="$ On";
        HideShow();
    }
    else if(test){
        GM_setValue("test", false);
        test=false;
        document.getElementById("toggle").innerHTML="$ Off";
        HideShow();
    }
}
