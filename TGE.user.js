// ==UserScript==
// @name        Tremorgames Enhanced
// @namespace   http://www.tremorgames.com/?action=viewtopic&topicid=79097
// @icon        http://www.tremorgames.com/templates/tremor/images/favicon.ico
// @description TremorGames Enhanced will enhance your tremorgames experience!
// @include     *://www.tremorgames.com/*?action=shop*
// @include     *://www.tremorgames.com/*?action=forums*
// @include     *://www.tremorgames.com/*?action=viewforum*
// @include     *://www.tremorgames.com/*?action=viewtopic&topicid=*
// @include     *://www.tremorgames.com/*?action=viewgiveaways*
// @include     *://www.tremorgames.com/*?action=editprofile*
// @include     *://www.tremorgames.com/*?action=showitem&itemid=*
// @include     *://www.tremorgames.com/*?action=messages*
// @include     *://www.tremorgames.com/editprofiles*
// @include     *://www.tremorgames.com/profiles*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @version     1.3.7
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_xmlhttpRequest
// @author      brenomirandi & Royalgamer06
// @downloadURL https://github.com/Breno-M/TGE/raw/master/TGE.user.js
// @updateURL   https://github.com/Breno-M/TGE/raw/master/TGE.user.js
// ==/UserScript==

//***************************************************************************** Sort-script
var script = document.createElement('script'); 
script.src = 'http://www.kryogenix.org/code/browser/sorttable/sorttable.js';
script.type = 'text/javascript'; 
document.getElementsByTagName('head')[0].appendChild(script); 

//***************************************************************************** Config

bGiveaways=GM_getValue("bGiveaways");
bUnsubscribe=GM_getValue("bUnsubscribe");
bLastpage=GM_getValue("bLastpage");
bLastpost=GM_getValue("bLastpost");
bSelectiveItems=GM_getValue("bSelectiveItems");
bWishlist=GM_getValue("bWishlist");
bPM=GM_getValue("bPM");
bInventory=GM_getValue("bInventory");
bSteam=GM_getValue("bSteam");
steamID=GM_getValue("steamID");

if(window.location.href.indexOf("editprofile") > -1) {

    $('div.reg_row:nth-child(18)').after('<div class="reg_row" id="tge_row0"><div class="reg_col1" style="color:#FFB300" width="80%"><b>TGE Features</b></div></div>');

    if(!bSteam)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row5"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleSteam" id="toggleSteam" name="5">Steam: Off</button></div></div>');
    else if(bSteam)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row5"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleSteam" id="toggleSteam" name="5">Steam: On</button></div></div>');

    $('#tge_row5').after('<div class="reg_col5" style="margin-top: 10px;"><button style="background-color:grey;width:150px;" onClick="return false;" class="cssbutton" value="reset" id="reset">Reset Subscriptions</button></div>');

    if(!bWishlist)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row4"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleW" id="toggleW" name="4">Wishlist: Off</button></div></div>');
    else if(bWishlist)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row4"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleW" id="toggleW" name="4">Wishlist: On</button></div></div>');

    if(!bInventory)
        $('#tge_row4').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleI" id="toggleI" name="7">Inventory: Off</button></div>');
    else if(bInventory)
        $('#tge_row4').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleI" id="toggleI" name="7">Inventory: On</button></div>');

    if(!bGiveaways)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row3"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleG" id="toggleG" name="9">Giveaways: Off</button></div></div>');
    else if(bGiveaways)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row3"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleG" id="toggleG" name="9">Giveaways: On</button></div></div>');

    if(!bPM)
        $('#tge_row3').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="togglePM" id="togglePM" name="6">PM: Off</button></div>');
    else if(bPM)
        $('#tge_row3').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="togglePM" id="togglePM" name="6">PM: On</button></div>');

    if(!bLastpage)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row2"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleL" id="toggleL" name="0">Last Page: Off</button></div></div>');
    else if(bLastpage)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row2"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleL" id="toggleL" name="0">Last Page: On</button></div></div>');

    if(!bUnsubscribe)
        $('#tge_row2').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleU" id="toggleU" name="2">Unsubscribe: Off</button></div>');
    else if(bUnsubscribe)
        $('#tge_row2').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleU" id="toggleU" name="2">Unsubscribe: On</button></div>');

    if(!bSelectiveItems)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row1"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleS" id="toggleS" name="3">Item Filter: Off</button></div></div>');
    else if(bSelectiveItems)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row1"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleS" id="toggleS" name="3">Item Filters: On</button></div></div>');

    if(!bLastpost)
        $('#tge_row1').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleP" id="toggleP" name="1">Last Post: Off</button></div>');
    else if(bLastpost)
        $('#tge_row1').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleP" id="toggleP" name="1">Last Post: On</button></div>');

    url = $('div+ a');
    if (url.length !== 0) { //set steamid cookie
        steamid = ($(url).text()).split('/')[4];
        GM_setValue("steamID", steamid);
    } else { //disable steam button
        $('#toggleSteam').attr('disabled','disabled').html('Disabled!');
        GM_setValue("bSteam", false);
        bSteam=false;
    }

    activateToolTip();
}

$("#reset").click(reset);
$("#toggleG").click(toggleG);
$("#toggleU").click(toggleU);
$("#toggleL").click(toggleL);
$("#toggleP").click(toggleP);
$("#toggleS").click(toggleS);
$("#toggleW").click(toggleW);
$("#togglePM").click(togglePM);
$("#toggleI").click(toggleI);
$("#toggleSteam").click(toggleSteam);

function toggleSteam(){
    if(!bSteam){
        GM_setValue("bSteam", true);
        bSteam=true;
        document.getElementById("toggleSteam").innerHTML="Steam: On";
    }
    else if(bSteam){
        GM_setValue("bSteam", false);
        bSteam=false;
        document.getElementById("toggleSteam").innerHTML="Steam: Off";
    }
}
function togglePM(){
    if(!bPM){
        GM_setValue("bPM", true);
        bPM=true;
        document.getElementById("togglePM").innerHTML="PM: On";
    }
    else if(bPM){
        GM_setValue("bPM", false);
        bPM=false;
        document.getElementById("togglePM").innerHTML="PM: Off";
    }
}
function toggleI(){
    if(!bInventory){
        GM_setValue("bInventory", true);
        bInventory=true;
        document.getElementById("toggleI").innerHTML="Inventory: On";
    }
    else if(bGiveaways){
        GM_setValue("bInventory", false);
        bInventory=false;
        document.getElementById("toggleI").innerHTML="Inventory: Off";
    }
}
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

//***************************************************************************** Cookies

function readCookie(name) {
    name += '=';
    for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
        if (!ca[i].indexOf(name))
            return ca[i].replace(name, '');
}


//***************************************************************************** Custom Order link fix
if (window.location.href.indexOf("?action=custom_game") > -1) {
    $('.form-horizontal').submit(function() {
        document.getElementById("url").value = document.getElementById("url").value + "/";
        return true;
    });
}

//***************************************************************************** Messages
if (window.location.href.indexOf("?action=messages") > -1 && bPM) {
    $('tr[valign="top"]').prepend('<td width="40" align="center" valign="middle" style="border-bottom:1px solid #E4E4E3;border-right:1px solid #E4E4E3;"><input type="checkbox"></td>');
    $('#innerbg > div.middle-container > div > div.main_section_box > div.main_section_content > table > tbody > tr:nth-child(1) > td').prepend('<button id="deleteButton" style="background-color: #0F96C8; color: white; position: relative; top: -5px;">DELETE CHECKED</button>');

    var func = "checkboxes = document.querySelectorAll('input[type=\"checkbox\"]'); for (var i = 0; i < checkboxes.length; i++) { checkboxes[i].checked = this.checked; }";
    document.querySelector('input[type="checkbox"]').setAttribute('onClick', func);

    document.getElementById("deleteButton").addEventListener("click", deleteSelected, false);
}

function deleteSelected() {
    var checked = document.querySelectorAll('input[type=checkbox]:checked');
    $('body').prepend('<img src="http://i.imgur.com/EyqtWKI.gif" style="position: fixed; width: 300px; height: auto; z-index: 1000; left: 40%; top: 40%; ">');

    for (var i = 0; i < checked.length; i++) {
        var iframe = document.createElement('iframe');
        iframe.style.display = "none";
        iframe.src = checked[i].parentNode.parentNode.querySelector('a[onclick="return confirmDeleteMessage()"]').getAttribute("href");
        if (i == checked.length - 1) {
            iframe.onload = setTimeout(function() { location.reload(); }, 1200);
        }
        document.body.appendChild(iframe);
    }
}

//***************************************************************************** Shop Item
if (window.location.href.indexOf("?action=showitem&itemid=") && document.getElementById("productlink") !== null && document.getElementById("item_name").innerHTML.indexOf("Steam") > -1) {
    if (bSteam) {
        var el = '<div id="steamcheck" style="margin-top: -20px; padding-bottom: 10px;"><img src="http://i.imgur.com/xp1c7nj.gif"></div>';
        $('.item_purchase').prepend(el);

        var appid = document.getElementById("productlink").getAttribute("href").split("/")[4];
        var steamid = GM_getValue("steamID");
        var owned = false;

        GM_xmlhttpRequest({
            method: 'GET',
            url: 'http://steamcommunity.com/profiles/' + steamid + '/games/?xml=1',
            onload: function(data) {
                var content = data.responseText;
                owned = (content.toString().indexOf('<appID>' + appid + '</appID>') > -1);
                if (owned) {
                    $('#steamcheck').html('<b style="font-size: 12px; color: red;">You already own this item on steam!</b>');
                } else if (!owned) {
                    $('#steamcheck').html('<b style="font-size: 12px; color: green;">You do not own this item on steam!</b>');                
                }
            }        
        });
    }
    var el = document.querySelectorAll(".btn")[1];
    el.style = "font-size: 22px;width:auto;"
    $(el).after('<form id="customorder" action="http://www.tremorgames.com?action=custom_game_submit" method="POST" style="display:inline"><input style="visibility: hidden; width: 0px" id="url" name="url" type="text"><button type="submit" class="btn" style="font-size: 22px;width:auto;">Custom order</button></form>');
    document.getElementById("url").value = document.getElementById("productlink").getAttribute("href") + "/";
}

//***************************************************************************** Export Items

function expandAll() {
    var max = parseInt(document.querySelector('[title="End"]').getAttribute('onclick').split("'")[3]) / 10 + 1;                
    var uid = window.location.href.split("/")[4];

    for (var i = 1; i < max; i++) {
        var start = 10 * i;
        $.get( "http://www.tremorgames.com/achievements/ajax_show_useritems.php?userid=" + uid + "&limitstart=" + start, function(data) {
            var rows = $('<div/>').html(data).find(".tbl_last > tbody > tr");
            $( "#UserItems > table.tbl_last > tbody").append(rows);
        });
    }

    $("div.ach_paging_ajax").hide();  
}

if (window.location.href.indexOf("/profiles/") > -1 && bInventory) {
    var ebtn = document.createElement("button");
    ebtn.setAttribute("id", "btnExportKeys");
    ebtn.setAttribute("class", "cssbutton");
    ebtn.setAttribute("style", "float: right; margin-top: 10px; margin-right: 10px;");
    ebtn.setAttribute("onClick", "var allnames = $('.txt a'); var allitems = $('.use_item_col span'); var msgWin = window.open('', 'Your Items', 'width=680, height=420'); for (var j = 0; j < allitems.length; j++) { if (!(allitems[j].innerHTML.indexOf('Item Sent') > -1)) { msgWin.document.writeln(allnames[j].innerHTML + '<br>'); var item = allitems[j].innerHTML; if (item.indexOf('http') > -1) { msgWin.document.writeln('<a target=\"_blank\" href=\"' + item + '\">' + item + '</a><br><br>'); } else { msgWin.document.writeln(item + '<br><br>'); } } }", false);
    ebtn.innerHTML = "Export steam keys";

    var lbtn = document.createElement("button");
    lbtn.setAttribute("id", "btnExpandAll");
    lbtn.setAttribute("class", "cssbutton");
    lbtn.setAttribute("style", "float: right; margin-top: 10px; margin-right: 10px;");
    lbtn.addEventListener("click", expandAll, false);
    lbtn.innerHTML = "Load all pages";

    setInterval(function() {
        if (document.getElementById("UserItems") !== null && document.getElementById("btnExportKeys") === null && document.getElementById("btnExpandAll") === null) {
            var myuid = readCookie("uid");                
            var uid = window.location.href.split("/")[4];

            if (myuid == uid) {
                $("#uprofile_content").prepend(lbtn);
                $("#uprofile_content").prepend(ebtn);
            }
        }
    }, 100);
}

//***************************************************************************** Wishlist
if (window.location.href.indexOf("/profiles/") > -1 && bWishlist) {

    var btn = document.createElement("button");
    btn.setAttribute("id", "btnRemoveOwned");
    btn.setAttribute("class", "cssbutton");
    btn.setAttribute("style", "float: right; margin-top: 10px; margin-right: 10px;");
    btn.addEventListener("click", RemoveOwned, false);
    btn.innerHTML = "Remove owned items";

    setInterval(function() {
        if (document.getElementById("UserWishlistItems") !== null && document.getElementById("btnRemoveOwned") === null) {
            var myuid = readCookie("uid");                
            var uid = window.location.href.split("/")[4];

            if (myuid == uid) {
                var attach = document.getElementById("uprofile_content");
                attach.insertBefore(btn, attach.firstChild);
            }

            if (document.getElementsByClassName("tbl_last sortable")[0] === undefined) {
                var max = parseInt(document.querySelector('[title="End"]').getAttribute('onclick').split("'")[3]) / 10 + 1;

                for (var i = 1; i < max; i++) {
                    var start = 10 * i;
                    $.get( "http://www.tremorgames.com/achievements/ajax_show_wishlistitems.php?userid=" + uid + "&limitstart=" + start, function(data) {
                        var rows = $('<div/>').html(data).find(".tbl_last > tbody > tr");
                        $( "#UserWishlistItems > table.tbl_last > tbody").append(rows);
                    });
                }

                $("div.ach_paging_ajax").hide();
                $("table.head").hide();
                $("table.tbl_last > tbody").prepend("<tr><td class='wdth1' style='background-color: #3d94f6; text-align: center;'></td><td class='seb'></td><td class='wdth2' style='background-color: #3d94f6; text-align: center;'></td><td class='seb'></td><td class='wdth3' style='background-color: #3d94f6; text-align: center;'></td><td class='seb'></td><td class='use_item_col' style='background-color: #3d94f6; text-align: center;'></td></tr>");
                $("table.tbl_last").addClass("sortable");

                makeSortable();
            }
        }
    }, 100);
}

function RemoveOwned() {
    var status_items = $("#UserWishlistItems div+ div");

    if (status_items.length > 0) {
        for (var i = 0; i < status_items.length; i++) {
            if (status_items[i].innerHTML == "You already have this item") {
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
        var sum = 0;
        var items = document.querySelectorAll(".box_round+ div b");
        for (var i = 0; i < items.length; i++) {
            sum += parseInt(items[i].innerHTML.match(/\d+/)[0]);
        }
        $('form[name=myform]').after('<br><button class="cssbutton" style="width:240px;" value="giveaway" id="giveaway">Enter all ' + buttons.length + ' giveaways<br>(costs ' + sum + ' tremor coins)</button>');
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

function activateToolTip() {
    image = [
        " http://i.imgur.com/WVSEeoW.png", //0 - Last page
        " http://i.imgur.com/OZvZqQ6.png", //1 - Last post
        " http://i.imgur.com/P7l8b5g.png", //2 - Unsubscribe
        " http://i.imgur.com/TGtUlhB.png", //3 - Hide unaffordable items
        " http://i.imgur.com/CcNhav3.png", //4 - Removed owned wishlist items
        " http://i.imgur.com/DPl7rrv.png", //5 - Owned on steam
        " http://i.imgur.com/I31gnjg.png", //6 - PM checkboxes
        " http://i.imgur.com/8e5AOHh.png", //7 - Export inventory
        " http://i.imgur.com/8e5AOHh.png", //8 - Expand inventory
        " http://i.imgur.com/2f2QhVJ.png"  //9 - Giveaways
    ];

    $('button[rel=tooltip]').mouseover(function(e) {

        //Grab the title attribute's value and assign it to a variable
        var img_i = $(this).attr('name');  

        //Append the tooltip template and its value
        $(this).append('<div id="tooltip"><img src="' + image[img_i] + '"></div>');    

        //Show the tooltip with faceIn effect
        //$('#tooltip').fadeIn('500');
        //$('#tooltip').fadeTo('10',0.9);

    }).mousemove(function(e) {

        var win_width;
        // Window dimensions:
        if (window.innerWidth) {
            win_width=window.innerWidth;
        }
        else if (document.documentElement && document.documentElement.clientWidth) {
            win_width=document.documentElement.clientWidth;
        }
        else if (document.body) {
            win_width=document.body.clientWidth;
        }

        if(win_width > 1900)
            x_dist = 435;
        else if (win_width > 1400)
            x_dist = 290;
        else if (win_width > 1350)
            x_dist = 160;

        else if (win_width > 1200)
            x_dist = 130;  
        else if (win_width > 1000)
            x_dist = -20;
        else
            x_dist = -40;

        //Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
        //$('#tooltip').css('z-index', 2147483647 );
        //$('#tooltip').css('position', 'fixed' );
        $('#tooltip').css('top', e.pageY + 10 );
        $('#tooltip').css('left', e.pageX - x_dist );

    }).mouseout(function() {
        //Remove the appended tooltip template
        $(this).children('div#tooltip').remove();
    });    
}

//***************************************************************************** Text Editor
if (window.location.href.indexOf("viewtopic&topicid") > -1) {

    areas = document.getElementsByTagName('textarea');
    commentArea = areas[areas.length - 2];
    if(isChrome)
        commentArea = document.getElementById("newcomment");

    $(commentArea).before('<center> \
<img src="http://i.imgur.com/PyijVpX.png" id="boldIco" ></img>             \
<img src="http://i.imgur.com/OMUDRHi.png" id="itaIco" ></img>              \
<img src="http://i.imgur.com/en3TT2f.png" id="h1Ico" ></img>               \
<img src="http://i.imgur.com/klDXQh9.png" id="h2Ico" ></img>               \
<img src="http://i.imgur.com/T7P87HS.png" id="hrIco" ></img>               \
<img src="http://i.imgur.com/tUQGJtC.png" id="linkIco" ></img>             \
<img src="http://i.imgur.com/mqL0xUh.png" id="imgIco" ></img>              \
<img src="http://i.imgur.com/APywE0o.png" id="tableIco" ></img>            \
</center>');

    document.getElementById("boldIco").addEventListener("click",function(){
        addTag("**", "**");
    })

    document.getElementById("itaIco").addEventListener("click",function(){
        addTag("*", "*");
    })

    document.getElementById("h1Ico").addEventListener("click",function(){
        addTag("#", "");
    })

    document.getElementById("h2Ico").addEventListener("click",function(){
        addTag("####", "");
    })

    document.getElementById("hrIco").addEventListener("click",function(){
        var sel_txt = commentArea.value.substring(commentArea.selectionStart, commentArea.selectionEnd);  
        if (sel_txt == "")
            commentArea.value = commentArea.value.substring(0,commentArea.selectionStart) + "___" + commentArea.value.substring(commentArea.selectionEnd, commentArea.value.length);
        commentArea.focus();
    })

    document.getElementById("linkIco").addEventListener("click",function(){
        generateCode(false);
    })

    document.getElementById("imgIco").addEventListener("click",function(){
        generateCode(true);
    })
    
    document.getElementById("tableIco").addEventListener("click",function(){
        
        if ($('#tableeditor').length > 0) {
           alert("Cancel the current table first");
            return;
        }
        
        var c = prompt("Column quantity: ", "");
        var r = prompt("Row quantity: ", "");
        generateTableEditor(c, r);
    })

    function addTag(prefix, suffix){
        var sel_txt = commentArea.value.substring(commentArea.selectionStart, commentArea.selectionEnd);  
        if (sel_txt != ""){
            if(/\s+$/.test(sel_txt))
                var replace = prefix + sel_txt.slice(0, -1) + suffix + " ";
            else
                var replace = prefix + sel_txt + suffix;
            commentArea.value = commentArea.value.substring(0,commentArea.selectionStart) + replace + commentArea.value.substring(commentArea.selectionEnd, commentArea.value.length);
        }
        commentArea.focus();
    }

    function generateCode(isImage){
        var url = prompt("Enter the URL: ", "");
        if(url)
            var txt = prompt("Enter a text: ", "");
        else
            return;
        var b = "[";
        if(isImage)
            b = "![";
        var sel_txt = commentArea.value.substring(commentArea.selectionStart, commentArea.selectionEnd);  
        if (sel_txt == "")
            commentArea.value = commentArea.value.substring(0,commentArea.selectionStart) + b + txt + "](" + url + ")" + commentArea.value.substring(commentArea.selectionEnd, commentArea.value.length);
        commentArea.focus();
    }
    
    function generateTableEditor(cols, rows){
        
        var tableEditor = $('<center><table id="tableeditor"><tbody>');
        for(var r = 0; r < rows; r++)
        {
            var tr = $('<tr>');
            for (var c = 0; c < cols; c++)
                if(r == 0)
                   $('<td><span class="commentTable" style="width: 100px; height: 20px; display: inline-block; border: 1px solid black; overflow: hidden; background-color:lightgreen " contenteditable></span></td>').appendTo(tr);
                else
                   $('<td><span class="commentTable" style="width: 100px; height: 20px; display: inline-block; border: 1px solid black; overflow: hidden;" contenteditable></span></td>').appendTo(tr);
            tr.appendTo(tableEditor);
        }
        $(commentArea).after(tableEditor);
        
        $(tableEditor).after('<br> <center> <p id="createtable" style="cursor: pointer; width: 100px; color: red; text-decoration: underline;">Add Table</p><br> \
                              <p id="canceltable" style="cursor: pointer; width: 100px; color: red; text-decoration: underline;">Cancel</p> </center>     \
                             </center>');
        
         document.getElementById("createtable").addEventListener("click",function(){
              CreateTable(cols, rows);
          })
         document.getElementById("canceltable").addEventListener("click",function(){
              $(tableEditor).remove();
             $(createtable).remove();
             $(canceltable).remove();
             
          })
    }
    
    function CreateTable(cols, rows){
               
        var codeTable="";
        
        var tableEditor = document.getElementsByClassName('commentTable');
        var f = 0;
        for(var i = 0; i< rows; i++){
             codeTable += '\n';
            
            if(i == 1){
                
                var headerLine = "";
                for(var k = 0; k < cols; k++){
                    headerLine += "------------- |" 
                }
                codeTable += headerLine + '\n';
            }

             f = i * (cols-1);
           for(var j = 0; j< cols; j++){
              codeTable += tableEditor[i+j+f].innerHTML + " | ";
           }
        }
        
        
        var sel_txt = commentArea.value.substring(commentArea.selectionStart, commentArea.selectionEnd);  
        if (sel_txt == "")
            commentArea.value = commentArea.value.substring(0,commentArea.selectionStart) + codeTable + commentArea.value.substring(commentArea.selectionEnd, commentArea.value.length);
        commentArea.focus();
    }

}
