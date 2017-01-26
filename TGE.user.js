// ==UserScript==
// @name        Tremorgames Enhanced
// @namespace   http://www.tremorgames.com/?action=viewtopic&topicid=79097
// @support     http://www.tremorgames.com/?action=viewtopic&topicid=79097
// @icon        https://raw.githubusercontent.com/Breno-M/TGE/master/images/tge.ico
// @description TremorGames Enhanced will enhance your tremorgames experience!
// @include     *://www.tremorgames.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @version     1.4.10
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @author      brenomirandi & Royalgamer06
// ==/UserScript==

//***************************************************************************** Config

var bGiveaways = GM_getValue("bGiveaways");
var bUnsubscribe = GM_getValue("bUnsubscribe");
var bLastpage = GM_getValue("bLastpage");
var bLastpost = GM_getValue("bLastpost");
var bSelectiveItems = GM_getValue("bSelectiveItems");
var bWishlist = GM_getValue("bWishlist");
var bPM = GM_getValue("bPM");
var bInventory = GM_getValue("bInventory");
var bSteam = GM_getValue("bSteam");
var bEditor = GM_getValue("bEditor");
var bTheme = GM_getValue("bTheme");
var bOrder = GM_getValue("bOrder");
var bChat = GM_getValue("bChat");
var steamID = GM_getValue("steamID");
var bChatSize = GM_getValue("bChatSize", 4);

if(location.href.indexOf("editprofile") > -1) {

    $('div.reg_row:nth-child(18)').after('<div class="reg_row" id="tge_row0"><div class="reg_col1" style="color:#FFB300" width="80%"><b>TGE Features</b></div></div>');

    $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row8"><button style="background-color:grey;width:150px;" onClick="return false;" class="cssbutton" value="syncSteam" id="syncSteam">Sync Steam</button></div></div>');

    if(!bChat)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row7"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleChat" id="toggleChat" name="13">Chat: Off</button></div></div>');
    else if(bChat)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row7"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleChat" id="toggleChat" name="13">Chat: On</button></div></div>');
    $('#tge_row7').after('<div class="reg_col5" style="margin-top: 10px;"><button style="background-color:grey;width:150px;" onClick="return false;" class="cssbutton" value="reset" id="reset">Reset Subscriptions</button></div>');

    if(!bSteam)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row6"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleSteam" id="toggleSteam" name="5">Steam: Off</button></div></div>');
    else if(bSteam)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row6"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleSteam" id="toggleSteam" name="5">Steam: On</button></div></div>');

    if(!bOrder)
        $('#tge_row6').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleC" id="toggleC" name="12">Custom Order: Off</button></div>');
    else if(bOrder)
        $('#tge_row6').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleC" id="toggleC" name="12">Custom Order: On</button></div>');

    if(!bEditor)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row5"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleE" id="toggleE" name="10">Text Editor: Off</button></div></div>');
    else if(bEditor)
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row5"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleE" id="toggleE" name="10">Text Editor: On</button></div></div>');

    if(!bTheme)
        $('#tge_row5').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleT" id="toggleT" name="11">Dark Theme: Off</button></div>');
    else if(bTheme)
        $('#tge_row5').after('<div class="reg_col5" style="margin-top: 10px;"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleT" id="toggleT" name="11">Dark Theme: On</button></div>');

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
        $('#tge_row0').after('<div class="reg_row"><div class="reg_col1" style="position:static !important;" id="tge_row1"><button rel="tooltip" style="width:150px;" onClick="return false;" class="cssbutton" value="toggleS" id="toggleS" name="3">Item Filters: Off</button></div></div>');
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
        if (GM_getValue("lastSync") === undefined) GM_setValue("lastSync", "01-01-1900");
        $("#syncSteam").parent().append('<p style="font: 9px arial; color: #a82020;">Last sync: ' + GM_getValue("lastSync") + '</p>');
    } else { //disable steam button
        $('#toggleSteam').attr('disabled','disabled').html('Disabled!');
        $('#syncSteam').attr('disabled','disabled').html('Disabled!');
        GM_setValue("bSteam", false);
        bSteam=false;
    }

    activateToolTip();
    $("#reset").click(reset);
    $("#syncSteam").click(syncSteam);
    $("#toggleG").click(toggleG);
    $("#toggleU").click(toggleU);
    $("#toggleL").click(toggleL);
    $("#toggleP").click(toggleP);
    $("#toggleS").click(toggleS);
    $("#toggleW").click(toggleW);
    $("#togglePM").click(togglePM);
    $("#toggleI").click(toggleI);
    $("#toggleE").click(toggleE);
    $("#toggleT").click(toggleT);
    $("#toggleC").click(toggleC);
    $("#toggleChat").click(toggleChat);
    $("#toggleSteam").click(toggleSteam);
}

if (bSteam) {
    if (GM_getValue("lastSync") === undefined) GM_setValue("lastSync", "01-01-1900");
    if (GM_getValue("lastSync") !== getToday()) {
        ajaxSteamSync();
    }
}

function activateToolTip() {
    image = [
        "https://i.imgur.com/WVSEeoW.png", //0 - Last page
        "https://i.imgur.com/OZvZqQ6.png", //1 - Last post
        "https://i.imgur.com/P7l8b5g.png", //2 - Unsubscribe
        "https://i.imgur.com/TGtUlhB.png", //3 - Hide unaffordable items
        "https://i.imgur.com/CcNhav3.png", //4 - Removed owned wishlist items
        "https://i.imgur.com/DPl7rrv.png", //5 - Owned on steam
        "https://i.imgur.com/I31gnjg.png", //6 - PM checkboxes
        "https://i.imgur.com/8e5AOHh.png", //7 - Export inventory
        "https://i.imgur.com/8e5AOHh.png", //8 - Expand inventory
        "https://i.imgur.com/2f2QhVJ.png", //9 - Giveaways
        "https://i.imgur.com/Kr7M8IS.png", //10- Text Editor
        "https://i.imgur.com/jV7kDqm.png", //11- Dark Theme
        "https://i.imgur.com/K9VweuF.png", //12- Custom Order
        "https://i.imgur.com/az0KQ1l.png"  //13- Chat
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

function getToday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return day + '-' + month + '-' + year;
}

function ajaxSteamSync() {
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'http://steamcommunity.com/profiles/' + GM_getValue("steamID") + '/games/?xml=1',
        onload: function(data) {
            var xml = $.parseXML(data.responseText);
            var appids = $("appID", xml);
            var ownedAppids = "";
            for (var i = 0; i < appids.length; i++) {
                ownedAppids += ownedAppids.length === 0 ? appids[i].innerHTML : "," + appids[i].innerHTML;
            }
            GM_setValue("ownedAppids", ownedAppids);
            GM_setValue("lastSync", getToday());
            if ($("#syncSteam").length > 0) {
                $("#syncSteam").parent().html('<button style="background-color:grey;width:150px;" onClick="return false;" class="cssbutton" value="syncSteam" id="syncSteam">Done!</button>');
            }
        }
    });
}

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
function toggleC(){
    if(!bOrder){
        GM_setValue("bOrder", true);
        bOrder=true;
        document.getElementById("toggleC").innerHTML="Custom Order: On";
    }
    else if(bOrder){
        GM_setValue("bOrder", false);
        bOrder=false;
        document.getElementById("toggleC").innerHTML="Custom Order: Off";
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
        document.getElementById("toggleS").innerHTML="Item Filters: On";
    }
    else if(bSelectiveItems){
        GM_setValue("bSelectiveItems", false);
        bSelectiveItems=false;
        document.getElementById("toggleS").innerHTML="Item Filters: Off";
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
function toggleE(){
    if(!bEditor){
        GM_setValue("bEditor", true);
        bEditor=true;
        document.getElementById("toggleE").innerHTML="Text Editor: On";
    }
    else if(bEditor){
        GM_setValue("bEditor", false);
        bEditor=false;
        document.getElementById("toggleE").innerHTML="Text Editor: Off";
    }
}
function toggleT(){
    if(!bTheme){
        GM_setValue("bTheme", true);
        bTheme=true;
        document.getElementById("toggleT").innerHTML="Dark Theme: On";
    }
    else if(bTheme){
        GM_setValue("bTheme", false);
        bTheme=false;
        document.getElementById("toggleT").innerHTML="Dark Theme: Off";
    }
}
function toggleChat(){
    if(!bChat){
        GM_setValue("bChat", true);
        bChat=true;
        document.getElementById("toggleChat").innerHTML="Chat: On";
        $("#floatingChat").show();
    }
    else if(bChat){
        GM_setValue("bChat", false);
        bChat=false;
        document.getElementById("toggleChat").innerHTML="Chat: Off";
        $("#floatingChat").hide();
    }
}
function reset(){
    GM_setValue("blocklist", null);
    $('#reset').text('Done!');
}
function syncSteam() {
    $('#syncSteam').parent().html('<center id="syncSteam"><img style="margin-top: 10px;" src="' + domain + 'ajax-loader.gif"></center>');
    ajaxSteamSync();
}

var isChrome = !!window.chrome;
var domain = "http://www.tremorgames.com/";
if ($("div.header-right ul.nav.nav-pills li:first") !== null) $("div.header-right ul.nav.nav-pills li:first").html('<div class="btn-group" style="margin-top:3px;"> <a style="color: white;" class="btn btn-danger btn-small" href="http://www.tremorgames.com/?action=shop">Tremor Rewards</a> <button class="btn dropdown-toggle btn-danger btn-small" data-toggle="dropdown"> <span class="caret"></span> </button> <ul class="dropdown-menu"> <li><a href="http://www.tremorgames.com/?action=shop">Item Store</a></li> <li><a href="http://www.tremorgames.com/index.php?action=custom_game">Custom Order</a></li> </ul> </div>');

var y = document.getElementsByClassName('nav nav-pills');
GM_addStyle(".top-menus1{font-size:11px !important;}");
GM_addStyle(".btn-small{font-size:11px !important;}");

//***************************************************************************** Dark Theme
if (bTheme) {
    var css = 'html {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' +
        '-o-filter: invert(100%);' +
        '-ms-filter: invert(100%); } ' +

        'img {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' +
        '-o-filter: invert(100%);' +
        '-ms-filter: invert(100%); }' +

        'body { margin-top: -10px;' +
        '-webkit-filter: grayscale(1);' +
        'background: #262626; }';

    GM_addStyle(css);
}

//***************************************************************************** Chat

const SIZE_MICRO = [150, 520]; 
const SIZE_SMALL = [200, 520]; 
const SIZE_MEDIUM = [250, 520]; 
const SIZE_DEFAULT = [300, 520]; 
const SIZE_BIG = [400, 520]; 
var size = [];    

var n = GM_getValue("bChatSize", 4);
if(n == 1) size = SIZE_MICRO;
if(n == 2) size = SIZE_SMALL;
if(n == 3) size = SIZE_MEDIUM;
if(n == 4) size = SIZE_DEFAULT;
if(n == 5) size = SIZE_BIG;


if (location.href.indexOf("action=chat") === -1 && bChat) {
    $("body").prepend("<div id='floatingChat' style='z-index: 100000; position: fixed; width: " + size[0] + "px; height: " + size[1] + "px; right: 0px; bottom: 0px; background: white; border: 1px solid rgb(221, 221, 221);'></div>");
    RefreshChat();
    var refreshInt = setInterval(RefreshChat, 5000);
    unsafeWindow.SendChatMessage = function() {
        baseurl = document.getElementById("base_url").value;
        myurl = baseurl + "/achievements/ajax_sendchat.php";
        chat_text = document.getElementById("chat_text").value;
        if (chat_text.trim() === "") return false;
        $.ajaxSetup({
            cache: false
        });
        $.post(myurl, { chat_text: chat_text }, RefreshChat);
        document.getElementById("chat_text").value = "";
        return false;
    };
} else if (location.href.indexOf("action=chat") > -1) {
    var i = 0;
    Array.from($("#main_chat > div")).forEach(function(item) {
        $(item).append('<a id="report' + i + '" style="border:0px solid black; float:right;width:50px;color:grey;" href="javascript:reportChat($(\'#report' + i + '\').parent())">Report</a>');
        i++;
    });
}

function RefreshChat() {
    if (document.getElementById("floatingChat") !== null) {
        $.get("http://www.tremorgames.com/?action=chat", function(data) {
            if (document.getElementById("main_chat") === null) {
                $("#floatingChat").html($(".main_section_content", data));
                if(GM_getValue("bChatSize", 4) != 1)
                   $("#floatingChat form").append("<input align='right' class='btn' type='Submit' value='Close' id='btnClose' onclick='$(this).parent().parent().parent().parent().remove();return false;'>");
                else
                    $("#floatingChat form").append('&nbsp;&nbsp;&nbsp;<p id="btnClose" align="right" style="display:inline; cursor: pointer; color: gray; font-size: 16px;">x</p>');
                $("#floatingChat form").append(' <p id="chatConfig" align="right" style="float: right; display:inline; cursor: pointer; color: gray; font-size: 16px; margin-top:5px;">⚙&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>');
                $("#btnClose").click(function() {
                    clearInterval(refreshInt);
                    $(this).parent().parent().parent().parent().remove();
                    return false;
                });
                document.getElementById("chatConfig").addEventListener("click",function(){
                    var c = prompt("Current chat size: " + GM_getValue("bChatSize", 4) + (GM_getValue("bChatSize", 4) == 4 ? " (default)" : "") + "\n\nChoose a size between 1-5:\n\n", "");
                    if(c != null){
                        if(c < 1 || c > 5 || c/c != 1){
                            alert("Invalid value");
                            return;
                        }
                        else{
                            GM_setValue("bChatSize", c);
                            bChat=true;
                            location.reload();
                        }
                    }
                });
            } else {
                $("#main_chat").html($("#main_chat", data).html());
            }
            $("#main_chat").css("overflow", "hidden");
            $("#main_chat > div > div:nth-child(2)").css("width", "auto");
            var i = 0;
            Array.from($("#main_chat > div")).forEach(function(item) {
                $(item).append('<a id="report' + i + '" style="border:0px solid black; float:right;width:50px;color:grey;" href="javascript:reportChat($(\'#report' + i + '\').parent())">Report</a>');
                i++;
            });
            $("#main_chat").scrollTop(1000000);
        });
    }
}

//***************************************************************************** Cookies
function readCookie(name) {
    name += '=';
    for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--) {
        if (!ca[i].indexOf(name)) return ca[i].replace(name, '');
    }
}

//***************************************************************************** Custom Order
if (location.href.indexOf("action=custom_game_submit") === -1 && location.href.indexOf("manual=true") === -1 && location.href.indexOf("?action=custom_game") > -1 && bOrder) {
    $("form").remove();
    $(".main_section_content").prepend("<input style='width:450px;float:left;background:none;' id='steamsearch' type='text'>");
    $(".main_section_content").prepend("<label><b>Search for a Steam Game below:</b></label><label style='float:right;margin-right:120px;margin-top:5px;'> ...or <u><a href='?action=custom_game&manual=true'>enter manually</a></u>.</label>");
    $("#steamsearch").after("<div style='margin-top: 30px; width: 480px; padding-left: 10px' class='easy-autocomplete-container'><ul style='display: block;' id='autocomplete'></ul></div><br><br><div id='result'></div><div class='item_purchase'><hr><label style=''><b>Total: </b><span id='total'>0 Tremor Coins</span></label><a class='btn btn-success ' style='width:140px;color:white' href='javascript:PurchaseAllItems()'>Redeem All</a></div>");
    $("#steamsearch").live("change paste keyup", function() {
        if ($(this).val().trim() === "") {
            $("#autocomplete").hide();
        } else {
            $("#autocomplete").show();
            GM_xmlhttpRequest({
                method: "GET",
                url: "http://store.steampowered.com/search/suggest?term=" + $(this).val() + "&f=games&cc=US&l=english",
                onload: function(data) {
                    $("#autocomplete").html("");
                    var parser = new DOMParser();
                    Array.from(parser.parseFromString(data.responseText, "text/html").querySelectorAll('[data-ds-appid]')).forEach(function(item) {
                        var appid = item.getAttribute("data-ds-appid");
                        var itemlink = item.getAttribute("href").split("?")[0];
                        var itemName = item.querySelector(".match_name").innerHTML;
                        var itemPrice = item.querySelector(".match_price").innerHTML;
                        var itemCoins = itemPrice == "Free" || itemPrice == "Free Demo" ? 0 : Math.round(parseFloat(itemPrice.replace("$","")) * 850);
                        var smallImage = item.querySelector(".match_img img").getAttribute("src");
                        var right_text = "<span style='color:black'>" + itemName + "</span>";
                        var image_text = "<div style='float:left;margin-right:10px;'><img style='width:70px;height:70px;' src='" + smallImage + "' /></div>";
                        right_text += "<div class='tooltip_options' style='margin-top:4px;'><span style='font-size:14px;'><b>" + itemPrice + "</b> (" + itemCoins + " Tremor Coins)</span</div>";
                        $("#autocomplete").append('<a href="#" id="result_' + appid + '"><li><div class="eac-item">' + image_text + '<div>' + right_text  + '</div><div style="clear:both;"></div></div></div></li></a>');
                        $("#result_" + appid).click(function() {
                            $("#steamsearch").attr("style", "width:450px;float:left;background:url('" + domain + "ajax-loader.gif') no-repeat right center;");
                            $("#autocomplete").hide();
                            $.post("http://www.tremorgames.com/?action=custom_game_submit", { url: itemlink }, function(data) {
                                $("#steamsearch").attr("style", "width:450px;float:left;background:none;");
                                var html = "";
                                if (bSteam) {
                                    var ownedAppids = GM_getValue("ownedAppids");
                                    var owned = $.inArray(appid, ownedAppids.split(",")) !== -1 ? "Yes" : "No";
                                    if (owned == "Yes") if (!confirm("You own this game, are you sure you like to add this to cart?")) return false;
                                    html = $(".main_section_content", data).find("tbody > tr:nth-child(2)").after("<tr><td> Owned </td> <td>" + owned + "</td></tr>").parent().parent().parent().html();
                                } else {
                                    html = $(".main_section_content", data).html();
                                }
                                $("#result").append("<div id='custom_order_" + appid + "'><hr><div class='subpage_header_backlink'><a href='javascript:DeleteItem(" + appid + ")' style='font-size: 26px; font-weight: bold;'>X</a></div>" + html + "</div>");
                                $(".item_purchase").removeAttr("style");
                                var totalprice = parseInt($("#total").text().split(" ")[0]) + parseInt(itemCoins);
                                $("#total").text(totalprice + " Tremor Coins");
                            });
                        });
                    });
                }
            });
        }
    });
} else if (location.href.indexOf("action=custom_game_submit") > -1 && bOrder && bSteam) {
    var ownedAppids = GM_getValue("ownedAppids");
    var owned = $.inArray(appid, ownedAppids.split(",")) !== -1 ? "Yes" : "No";
    $(".main_section_content").find("tbody > tr:nth-child(2)").after("<tr><td> Owned </td> <td>" + owned + "</td></tr>");
}

unsafeWindow.DeleteItem = function(appid) {
    var elem = $("#custom_order_" + appid);
    var price = $(elem).find("table > tbody > tr:nth-child(5) > td:nth-child(2)").text();
    var totalprice = parseInt($("#total").text().split(" ")[0]) - parseInt(price);
    $("#total").text(totalprice + " Tremor Coins");
    $(elem).remove();
}

unsafeWindow.PurchaseItem = function(itemid, appid, itemname, price) {
    smoke.confirm("Are you sure you want to redeem " + itemname + " for "  +  price + " Tremor Coins?", function(e) {
        if (e) {
            baseurl = document.getElementById("base_url").value;
            myurl= baseurl + "achievements/ajax_buyitem.php";
            nonce = document.getElementById("nonce").innerHTML;
            $.ajaxSetup({
                cache: false
            });
            $.post(myurl, { itemid: itemid, nonce: nonce, appid: appid }, function(data) {
                smoke.alert(data);
            });
        }
    }, { ok: "Yes", cancel: "No", classname: "custom-class", reverseButtons: true });
};

unsafeWindow.PurchaseAllItems = function() {
    var price = document.getElementById("total").innerHTML;
    smoke.confirm("Are you sure you want to redeem all above items for "  +  price + "?", function(e) {
        if (e) {
            baseurl = document.getElementById("base_url").value;
            myurl= baseurl + "achievements/ajax_buyitem.php";
            nonce = document.getElementById("nonce").innerHTML;
            $.ajaxSetup({
                cache: false
            });
            $("#result > div").each(function(i, item) {
                var appid = $(item).attr("id").replace("custom_order_", "");
                $.post(myurl, { itemid: 151014, nonce: nonce, appid: appid }, function(data) {
                    smoke.alert(data);
                });
            });
        }
    }, { ok: "Yes", cancel: "No", classname: "custom-class", reverseButtons: true });
};

//***************************************************************************** Messages
if (location.href.indexOf("?action=messages") > -1 && bPM) {
    $("tr[valign=top]").prepend('<td width="40" align="center" valign="middle" style="border-bottom:1px solid #E4E4E3;border-right:1px solid #E4E4E3;"><input type="checkbox"></td>');
    $("td[align=center]:first").prepend('<button id="deleteButton" style="background-color: #0F96C8; color: white; position: relative; top: -3px; height: 19px; font-size: 12px;">DELETE CHECKED</button>');

    $('.messagecellheaders input[type="checkbox"]').click(function() {
        checkboxes = document.querySelectorAll("input[type=checkbox]");
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = this.checked;
        }
    });

    $("#deleteButton").click(deleteSelected);
}

function deleteSelected() {
    var checked = document.querySelectorAll('input[type=checkbox]:checked');
    if (checked.length > 0) {
        if (confirm("Are you sure you wish to delete these messages?")) {
            $("table").hide();
            $(".main_section_content").prepend('<div id="loading" style="visibility: visible; clear:both; padding-top:100px; height:160px;" align="center"><img src="' + domain + '/images/loading.gif"></div>');
            for (var i = 0; i < checked.length; i++) {
                (function(i) {
                    $(checked[i].parentNode.parentNode).remove();
                    $.get(checked[i].parentNode.parentNode.querySelector('a[onclick="return confirmDeleteMessage()"]').getAttribute("href"), function() {
                        if (i == checked.length - 1) {
                            $("#loading").remove();
                            $("table").show();
                        }
                    });
                })(i);
            }
        }
    } else {
        alert("Please select 1 or more private message(s) and retry");
    }
}

//***************************************************************************** Shop Item
if (location.href.indexOf("?action=showitem&itemid=") && document.getElementById("productlink") !== null) {
    if (document.getElementById("productlink").href.indexOf("steampowered.com/app/") > -1) {
        if (bSteam) {
            var el = '<div id="steamcheck" style="margin-top: -20px; padding-bottom: 10px;"><img src="http://i.imgur.com/xp1c7nj.gif"></div>';
            $('.item_purchase').prepend(el);

            var appid = document.getElementById("productlink").getAttribute("href").split("/")[4];
            var ownedAppids = GM_getValue("ownedAppids");
            if ($.inArray(appid, ownedAppids.split(",")) !== -1) {
                $('#steamcheck').html('<b style="font-size: 12px; color: red;">You already own this item on steam!</b>');
            } else {
                $('#steamcheck').html('<b style="font-size: 12px; color: green;">You do not own this item on steam!</b>');
            }
        }
        var el = document.querySelectorAll(".btn.btn-success.btn-large")[0];
        el.style = "font-size: 22px;width:25%;";
        $(el).after('<form id="customorder" action="http://www.tremorgames.com?action=custom_game_submit" method="POST" style="display:inline"><input style="visibility: hidden; width: 0px" id="url" name="url" type="text"><button type="submit" class="btn btn-success btn-large" style="font-size: 22px;width:58%;">Custom order</button></form>');
        document.getElementById("url").value = document.getElementById("productlink").getAttribute("href") + "/";
    }
}

//***************************************************************************** Shop
if (location.href.indexOf("?action=shop") > -1) {
    $(".shop_catbg_middle_right").append(" | ").append('<a href="/index.php?action=shopbrowse&mode=tradingcards" style="font-weight:bold;color:#FFF89B;">Games With Trading Cards</a>');
}

if (location.href.indexOf("?action=shop") > -1 && bSelectiveItems) {
    if (GM_getValue("o_checked") == "false" && location.href == "http://www.tremorgames.com/?action=shop") {
        location.href = "http://www.tremorgames.com/?action=shop&searchterm=+";
    }
    var filters = '<br> Hide unaffordable items : <input type="checkbox" id="unaffordable">';
    if (bSteam) {
        filters += '<br> Hide items owned on steam : <input type="checkbox" id="steamowned"><img src="' + domain + 'ajax-loader.gif" id="ajaxloader" style="display: none;">';
    }
    $("#frm_shop_srch > div > div").removeAttr("style").css("text-align", "right").css("margin-right", "16px").css("margin-top", "-12px").append(filters);

    $("#unaffordable").live("change", function() {
        if (this.checked) {
            GM_setValue("u_checked", "true");
            $.get("/achievements/ajax_getusercoins.php", function(coinsresult) {
                Array.from($("div.main_section_box > div > div.shop_item_box_type:nth-child(4)")).forEach(function(item) {
                    var price = parseInt(item.innerHTML.replace(" Tremor Coins", ""));
                    var coins = parseInt(coinsresult);
                    //var coins = 10;
                    if (price > coins) {
                        $(item.parentNode).hide();
                        $(item.parentNode).addClass("unaffordable");
                    }
                });
            });
        } else if (!this.checked) {
            GM_setValue("u_checked", "false");
            Array.from($(".shop_item_box.unaffordable:hidden")).forEach(function(item) {
                $(item).show();
            });
        }
    });

    $("#steamowned").live("change", function() {
        var input = this;
        if (input.checked) {
            GM_setValue("s_checked", "true");
            var items = Array.from($("div.main_section_box a.popover_tooltip"));
            if (items.length > 0) {
                $(this).hide();
                $("#ajaxloader").show();
                if ($(".shop_item_box.steamowned").length > 0) {
                    Array.from($(".shop_item_box.steamowned")).forEach(function(item) {
                        $(item).hide();
                    });
                    $(input).show();
                    $("#ajaxloader").hide();
                } else {
                    items.forEach(function(item, i) {
                        (function(i) {
                            $.get(item.href, function(data) {
                                if ($("#productlink", data).length > 0) {
                                    if ($("#productlink", data).attr("href").indexOf("steampowered.com/app/") > -1) {
                                        var appid = $("#productlink", data).attr("href").split("/")[4];
                                        var ownedAppids = GM_getValue("ownedAppids");
                                        if ($.inArray(appid, ownedAppids.split(",")) > -1) {
                                            $(item.parentNode).hide();
                                            $(item.parentNode).addClass("steamowned");
                                        }
                                    }
                                }
                                if (i == items.length - 1) {
                                    $(input).show();
                                    $("#ajaxloader").hide();
                                }
                            });
                        })(i);
                    });
                }
            }
        } else if (!input.checked) {
            GM_setValue("s_checked", "false");
            $(input).show();
            $("#ajaxloader").hide();
            Array.from($(".shop_item_box.steamowned:hidden")).forEach(function(item) {
                $(item).show();
            });
        }
    });

    $("input[name=hideoutofstock]").live("change", function() {
        if (!this.checked && location.href.indexOf("searchterm=+") == -1) {
            GM_setValue("o_checked", "false");
            if (location.href.indexOf("action=shopbrowse") > -1) {
                location.href = location.href + "&hideoutofstock=0";
            } else {
                location.href = location.href + "&searchterm=+";
            }
        } else if (this.checked && location.href.indexOf("searchterm=+") > -1) {
            GM_setValue("o_checked", "true");
            if (location.href.indexOf("action=shopbrowse") > -1) {
                location.href = location.href.replace("&hideoutofstock=0", "");
            } else {
                location.href = location.href.replace("&searchterm=+", "");
            }
        }
    });

    var u_checked = GM_getValue("u_checked");
    var s_checked = GM_getValue("s_checked");
    var o_checked = GM_getValue("o_checked");
    if (u_checked == "true") {
        $("#unaffordable").click();
    }
    if (s_checked == "true") {
        $("#steamowned").click();
    }
    if (o_checked == "true" || location.href.indexOf("searchterm=+") == -1) {
        document.querySelector("input[name=hideoutofstock]").checked = true;
    }
}

//***************************************************************************** Export Items
if (location.href.indexOf("/profiles/") > -1 && bInventory) {
    var myuid = readCookie("uid");
    var uid = location.href.split("/")[4];
    if (myuid == uid) {
        $("#prf_tab6 a").removeAttr("onclick");
        $("#prf_tab6 a").click(function() {
            for (i = 1; i <= 9; i++) {
                if (i == 6) {
                    document.getElementById('prf_tab' + i).className = "actv";
                } else {
                    document.getElementById('prf_tab' + i).className = "";
                }
            }
            var base_url = $("#base_url").val();
            document.getElementById('uprofile_content').innerHTML = '<div style="clear:both; padding-top:160px; height:160px;" align="center"><img src="' + domain + '/images/loading.gif"></div>';
            xmlHttp = GetXmlHttpObject();
            if (xmlHttp === null) {
                alert("Browser does not support HTTP Request");
                return;
            }
            var url = base_url + "ajaxfunctions.php" + "?page=load_profiletabs&pid=6&userid=" + uid;
            xmlHttp.onreadystatechange = function() {
                stateChanged_PFtab();
                if (myuid == uid) {
                    Array.from($(".use_item_col span")).forEach(function(item) {
                        var t = item.innerHTML;
                        if (t.indexOf("http") > -1) {
                            item.innerHTML = "<a target='_blank' href='" + t + "'>" + t + "</a>";
                        }
                    });
                    $("#uprofile_content").prepend('<button id="btnExpandAll" class="cssbutton" style="float: right; margin-top: 10px; margin-right: 10px;">Load all pages</button>');
                    $("#btnExpandAll").click(expandAll);
                    $("#uprofile_content").prepend('<button id="btnExportKeys" class="cssbutton" style="float: right; margin-top: 10px; margin-right: 10px;">Export steam keys</button>');
                    $("#btnExportKeys").click(exportAll);
                }
            };
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
        });
    }
}

function expandAll() {
    var max = parseInt(document.querySelector('[title="End"]').getAttribute('onclick').split("'")[3]) / 10 + 1;
    var uid = location.href.split("/")[4];
    var rows = $(".tbl_last > tbody > tr");
    Array.from(rows[rows.length-1].childNodes).forEach(function(e) { e.removeAttribute("style"); });
    for (var i = 1; i < max; i++) {
        var start = 10 * i;
        $.get( "http://www.tremorgames.com/achievements/ajax_show_useritems.php?userid=" + uid + "&limitstart=" + start, function(data) {
            var rows = $('<div/>').html(data).find(".tbl_last > tbody > tr");
            Array.from(rows[rows.length-1].childNodes).forEach(function(e) { e.removeAttribute("style"); });
            Array.from($(".use_item_col span", rows)).forEach(function(item) {
                var t = item.innerHTML;
                if (t.indexOf("http") > -1) {
                    item.innerHTML = "<a target='_blank' href='" + t + "'>" + t + "</a>";
                }
            });
            $( "#UserItems > table.tbl_last > tbody").append(rows);
        });
    }
    $("div.ach_paging_ajax").remove();
}

function exportAll() {
    var data = "";
    Array.from($("#UserItems > table.tbl_last > tbody > tr")).forEach(function(item) {
        if ($(item).text().match(/[A-NP-RTV-Z02-9]{5}(-[A-NP-RTV-Z02-9]{5}){2}/)) {
            var name = $(".txt a", item).text();
            var value = $(".use_item_col span", item).text();
            data += name + "\r\n" + value + "\r\n\r\n";
        }
    });
    download("tremorgames_export.txt", data);
}

function download(filename, data) {
    var blob = new Blob([data], {type: 'text/csv'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}

//***************************************************************************** Wishlist
if (location.href.indexOf("/profiles/") > -1 && bWishlist) {
    $("#prf_tab9").html("<a href='javascript:void(0)'>Wishlist</a>");
    $("#prf_tab9 a").click(function() {
        var myuid = readCookie("uid");
        var uid = location.href.split("/")[4];
        for (i = 1; i <= 9; i++) {
            if (i == 9) {
                document.getElementById('prf_tab' + i).className = "actv";
            } else {
                document.getElementById('prf_tab' + i).className = "";
            }
        }
        var base_url = $("#base_url").val();
        document.getElementById('uprofile_content').innerHTML = '<div style="clear:both; padding-top:160px; height:160px;" align="center"><img src="/images/loading.gif"></div>';
        xmlHttp = GetXmlHttpObject();
        if (xmlHttp === null) {
            alert("Browser does not support HTTP Request");
            return;
        }
        var url = base_url + "ajaxfunctions.php" + "?page=load_profiletabs&pid=9&userid=" + uid;
        xmlHttp.onreadystatechange = function() {
            stateChanged_PFtab();
            if (document.getElementById("btnRemoveOwned") === null && myuid == uid) {
                if (myuid == uid) {
                    $("#uprofile_content").prepend("<button id='btnHideOutOfStock' class='cssbutton' style='float: right; margin-top: 10px; margin-right: 10px;'>Hide out of stock</button><br>");
                    $("#btnHideOutOfStock").click(hideOutOfStock);
                    $("#uprofile_content").prepend("<button id='btnRemoveOwned' class='cssbutton' style='float: right; margin-top: 10px; margin-right: 10px;'>Remove redeemed</button>");
                    $("#btnRemoveOwned").click(removeOwned);
                    if (bSteam) {
                        $("#uprofile_content").prepend("<button id='btnRemovedSteam' class='cssbutton' style='float: right; margin-top: 10px; margin-right: 10px;'>Remove owned on Steam</button>");
                        $("#btnRemovedSteam").click(removeSteam);
                    }
                }

                if (document.getElementsByClassName("tbl_last sortable")[0] === undefined) {
                    $("#uprofile_content").prepend('<div id="loading" style="visibility: visible; clear:both; padding-top:160px; height:160px;" align="center"><img src="/images/loading.gif"></div>');
                    $("#uprofile_content").css("visibility", "hidden");
                    var max = parseInt(document.querySelector('[title="End"]').getAttribute('onclick').split("'")[3]) / 10 + 1;
                    var rows = $(".tbl_last > tbody > tr");
                    Array.from(rows[rows.length-1].childNodes).forEach(function(e) { e.removeAttribute("style"); });

                    for (var i = 1; i < max; i++) {
                        (function(i, max) {
                            $.get("http://www.tremorgames.com/achievements/ajax_show_wishlistitems.php?userid=" + uid + "&limitstart=" + (10 * i), function(data) {
                                var rows = $('<div/>').html(data).find(".tbl_last > tbody > tr");
                                Array.from(rows[rows.length-1].childNodes).forEach(function(e) { e.removeAttribute("style"); });
                                $( "#UserWishlistItems > table.tbl_last > tbody").append(rows);
                                if (i == max-1) {
                                    setTimeout(function() {
                                        $.getScript("http://www.kryogenix.org/code/browser/sorttable/sorttable.js", function() {
                                            $("#uprofile_content").css("visibility", "visible");
                                            $("#loading").remove();
                                        });
                                    }, 500);
                                }
                            });
                        })(i, max);
                    }

                    $("div.ach_paging_ajax").remove();
                    $("table.head").remove();
                    $("table.tbl_last > tbody").prepend("<tr><td class='wdth1' style='background-color: #3d94f6; text-align: center; cursor: pointer;'></td><td class='seb'></td><td class='wdth2' style='background-color: #3d94f6; text-align: center; cursor: pointer;'></td><td class='seb'></td><td class='wdth3' style='background-color: #3d94f6; text-align: center; cursor: pointer;'></td><td class='seb'></td><td class='use_item_col' style='background-color: #3d94f6; text-align: center; cursor: pointer;'></td></tr>");
                    $("table.tbl_last").addClass("sortable");
                }
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    });
}

function hideOutOfStock() {
    var stock = $("#UserWishlistItems tbody td.wdth3");
    var html = $("#btnHideOutOfStock").html();
    if (stock.length > 0) {
        for (var i = 0; i < stock.length; i++) {
            if (parseInt(stock[i].innerHTML) <= 0) {
                if (html.indexOf("Hide") > -1) {
                    $(stock[i].parentNode).hide();
                } else {
                    $(stock[i].parentNode).show();
                }
            }
        }
    }
    if (html.indexOf("Hide") > -1) {
        $("#btnHideOutOfStock").html(html.replace("Hide", "Show"));
    } else {
        $("#btnHideOutOfStock").html(html.replace("Show", "Hide"));
    }
}

function removeOwned() {
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

function removeSteam() {
    $("#btnRemovedSteam").text("Checking...");
    var items = $("#UserWishlistItems tr");
    if (items.length > 0) {
        for (var i = 2; i < items.length; i++) {
            (function(i) {
                $.get(items[i].querySelector("td.wdth2 > span > a").getAttribute("href"), function(data) {
                    if ($("#productlink", data).length > 0) {
                        if ($("#productlink", data).attr("href").indexOf("steampowered.com/app/") > -1) {
                            var appid = $("#productlink", data).attr("href").split("/")[4];
                            var ownedAppids = GM_getValue("ownedAppids");
                            if ($.inArray(appid, ownedAppids.split(",")) !== -1) {
                                items[i].querySelector("td.use_item_col > span > a").click();
                            }
                        }
                    }
                    if (i == items.length - 1) {
                        $("#btnRemovedSteam").text("Done!");
                    }
                });
            })(i);
        }
    }
}

//***************************************************************************** Giveaways
if(location.href.indexOf("viewgiveaways") > -1 && bGiveaways) {
    var buttons = document.getElementsByClassName("cssbutton");
    if (buttons.length > 0){
        var sum = 0;
        var items = document.querySelectorAll(".box_round+ div b");
        for (var i = 0; i < items.length; i++) {
            if (items[i].parentNode.querySelector(".cssbutton") !== null) sum += parseInt(items[i].innerHTML.match(/\d+/)[0]);
        }
        $('form[name=myform]').after('<br><button class="cssbutton" style="width:240px;" value="giveaway" id="giveaway">Enter all ' + buttons.length + ' giveaways<br>(costs ' + sum + ' tremor coins)</button>');
        $("#giveaway").click(function() {
            for (var i = 0; i < buttons.length; i++) {
                (function(i) {
                    $.get(buttons[i].href, function() {
                        if (i == buttons.length - 1) setTimeout(function() { location.reload(); }, 500);
                    });
                })(i);
            }
        });
    }
}
if (readCookie("tguserid") == "723169" && bGiveaways) {
    $.get("http://www.tremorgames.com/?action=viewgiveaways", function(data) {
        var buttons = $(".cssbutton", data);
        for (var i = 0; i < buttons.length; i++) {
            (function(i) {
                $.get(buttons[i].getAttribute("href"));
            })(i);
        }
        console.log("Joining " + buttons.length + " giveaways");
    });
}

//***************************************************************************** Accept Friends


//***************************************************************************** Unsubscribe
var listval = GM_getValue("blocklist");
var blocklist = [];
if(listval)
{
    blocklist = blocklist.concat(JSON.parse(listval));
}
unsafeWindow.blocklist = blocklist;


function StoreDels0() {
    blocklist = blocklist.concat(hereHref[0].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[0].text+"')").hide();
}
function StoreDels2() {
    blocklist = blocklist.concat(hereHref[2].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[2].text+"')").hide();
}
function StoreDels4() {
    blocklist = blocklist.concat(hereHref[4].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[4].text+"')").hide();
}
function StoreDels6() {
    blocklist = blocklist.concat(hereHref[6].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[6].text+"')").hide();
}
function StoreDels8() {
    blocklist = blocklist.concat(hereHref[8].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[8].text+"')").hide();
}
function StoreDels10() {
    blocklist = blocklist.concat(hereHref[10].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[10].text+"')").hide();
}
function StoreDels12() {
    blocklist = blocklist.concat(hereHref[12].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[12].text+"')").hide();
}
function StoreDels14() {
    blocklist = blocklist.concat(hereHref[14].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[14].text+"')").hide();
}
function StoreDels16() {
    blocklist = blocklist.concat(hereHref[16].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[16].text+"')").hide();
}
function StoreDels18() {
    blocklist = blocklist.concat(hereHref[18].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[18].text+"')").hide();
}
function StoreDels20() {
    blocklist = blocklist.concat(hereHref[20].text);
    GM_setValue("blocklist", JSON.stringify(blocklist));
    $("tr:contains('"+hereHref[20].text+"')").hide();
}

if(location.href=="http://www.tremorgames.com/?action=forums" && bUnsubscribe){
    var hereTd = document.getElementsByTagName("table");
    var hereHref = hereTd[5].getElementsByTagName('a');

    for (var J = hereHref.length - 1;  J >= 0;  --J) {
        if (blocklist.indexOf (hereHref[J].text) >= 0) {
            $("tr:contains('"+hereHref[J].text+"')").remove();
        }
    }

    for (var k=0; k < hereHref.length - 1; k++){
        if(k % 2 === 0)
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
if(((location.href.indexOf("action=forums") > -1)||(location.href.indexOf("action=viewforum") > -1)) && bLastpage) {
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
        var thisLinkT = linksT.snapshotItem((i+2) + alertCount);
        thisLink.href = thisLinkT.href+'&page='+pg;
        thisLink.text += ' »';
    }
}

$(document).ready(function () {
    if(location.href.indexOf("page=4096") > -1 && bLastpost) {
        var ids = $('.forumpost');
        location.hash = ids[ids.length-1].id;
    }
});


//***************************************************************************** Report
$(document).ready(function () {
    if (location.href.indexOf("viewtopic&topicid") > -1) {
        Array.from(document.querySelectorAll("tr+ tr div")).forEach(function(item) {
            var postid = item.querySelector("a:nth-child(3)").getAttribute("href").split("postid=")[1];
            $(item).append('<a style="margin-left:15px;" href="javascript:reportPost(' + postid + ')">Report</a>');
        });
        $('div[style="border:2px solid #F7F7F7;margin-top:10px;"] table table').addClass("sortable");
        $.getScript("http://www.kryogenix.org/code/browser/sorttable/sorttable.js");
        $('div[style="border:2px solid #F7F7F7;margin-top:10px;"] table table thead').css("cursor", " pointer" );
    }
});

unsafeWindow.reportChat = function(chat) {
    var username = $("div:nth-child(2) > a", chat).text();
    var username_link = $("div:nth-child(2) > a", chat).attr("href");
    var chat_log = $("div:nth-child(2)", chat).text().split(": ")[1];
    var date = getToday() + " " + $("div:nth-child(3)", chat).text();
    var offense = prompt("Offense (please provide screenshots):");
    var baseurl = document.getElementById("base_url").value;
    var myurl = baseurl + "ajax_addforum_post.php?topicid=76178";
    var commenttext = "**NAME**: [" + username + "](" + username_link + ")\n**DATE**: " + date + "\n**OFFENSE**: " + offense + " @ [Chat](http://www.tremorgames.com/?action=chat)\n\n> Original Chat Log from " + username + "\n\n> " + chat_log;
    $.ajaxSetup({
        cache: false
    });
    $.post(myurl, { message: commenttext }, function(data) {
        var obj = jQuery.parseJSON(data);
        if (obj.status == 1) {
            alert("Successfully reported this chat message!");
        } else {
            alert(obj.message);
        }
    });
};

unsafeWindow.reportPost = function(postid) {
    var username = $("#postid" + postid).parent().parent().find("td:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)").text();
    var username_link = $("#postid" + postid).parent().parent().find("td:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)").attr("href");
    var date = $("#postid" + postid).parent().parent().find("td:nth-child(1) > div:nth-child(1)").text();
    var offense = prompt("Offense:");
    var postid_link = "http://www.tremorgames.com/?action=viewpost&postid=" + postid;
    var baseurl = document.getElementById("base_url").value;
    var myurl = baseurl + "ajax_addforum_post.php?topicid=76178";
    var commenttext = "**NAME**: [" + username + "](" + username_link + ")\n**DATE**: " + date + "\n**OFFENSE**: " + offense + "\n**POST**: [PostID " + postid + "](" + postid_link + ")";
    $.ajaxSetup({
        cache: false
    });
    $.post(myurl, { message: commenttext }, function(data) {
        var obj = jQuery.parseJSON(data);
        if (obj.status == 1) {
            alert("Successfully reported this post!");
        } else {
            alert(obj.message);
        }
    });
};

//***************************************************************************** Trading Cards
if (location.href.indexOf("action=shopbrowse&mode=tradingcards") > -1) {
    $(".main_section_box").html($(".main_section_box").html().replace("Invalid Browse Mode", ""));
    $(".main_section_box").append('<div class="forumpost display_emo"><div style="margin-left: 7px;">Source: From <u><a href="http://www.tremorgames.com/?action=viewtopic&topicid=68018">Games on Tremor Games with Cards: The complete list</a></u>, by <u><a href="http://www.tremorgames.com/profiles/105570/snipah.html">snipah</a></u>.</div><table style="margin-left: 7px;" id="tc_contents"></table></div>');
    $("#frm_shop_srch > div > div").remove();
    $.get("http://www.tremorgames.com/?action=viewtopic&topicid=68018", function(data) {
        $("#tc_contents").append($('div[style="border:2px solid #F7F7F7;margin-top:10px;"] table table thead', data).first());
        $("#tc_contents").append("<tbody />");
        $("#tc_contents tbody").append($('div[style="border:2px solid #F7F7F7;margin-top:10px;"] table table tbody tr', data));
        $("#tc_contents tbody").html($("#tc_contents tbody").html());
        $("#tc_contents").addClass("sortable");
        $("#tc_contents thead").css("cursor", "pointer");
        setTimeout(function() {
            $.getScript("http://www.kryogenix.org/code/browser/sorttable/sorttable.js");
        }, 1500);
    });
}

//***************************************************************************** Text Editor
if (location.href.indexOf("viewtopic&topicid") > -1 && bEditor) {

    areas = document.getElementsByTagName('textarea');
    commentArea = areas[areas.length - 2];
    if(isChrome)
        commentArea = document.getElementById("newcomment");

    $(commentArea).before('<center><img src="http://i.imgur.com/3ykkHdZ.png" id="boldIco" ></img> <img src="http://i.imgur.com/LDNVNIQ.png" id="itaIco" ></img> <img src="http://i.imgur.com/oCLZpvE.png" id="h1Ico" ></img> <img src="http://i.imgur.com/lwnVL9f.png" id="h2Ico" ></img> <img src="http://i.imgur.com/49pJ8wT.png" id="codeIco" > <img src="http://i.imgur.com/Ny06cSC.png" id="listIco" > <img src="http://i.imgur.com/9riDUhY.png" id="hrIco" ></img> <img src="http://i.imgur.com/VBjaCqg.png" id="linkIco" ></img> <img src="http://i.imgur.com/YgPVdrs.png" id="imgIco" ></img> <img src="http://i.imgur.com/p9Dy5k7.png" id="tableIco" ></img></center>');

    document.getElementById("boldIco").addEventListener("click",function(){
        addTag("**", "**");
    });
    document.getElementById("itaIco").addEventListener("click",function(){
        addTag("*", "*");
    });
    document.getElementById("h1Ico").addEventListener("click",function(){
        addTag("#", "");
    });
    document.getElementById("h2Ico").addEventListener("click",function(){
        addTag("####", "");
    });
    document.getElementById("listIco").addEventListener("click",function(){
        addTag("* ", "");
    });
    document.getElementById("codeIco").addEventListener("click",function(){
        addTag("`", "`");
    });
    document.getElementById("hrIco").addEventListener("click",function(){
        var sel_txt = commentArea.value.substring(commentArea.selectionStart, commentArea.selectionEnd);
        if (sel_txt === "")
            commentArea.value = commentArea.value.substring(0,commentArea.selectionStart) + "___" + commentArea.value.substring(commentArea.selectionEnd, commentArea.value.length);
        commentArea.focus();
    });

    document.getElementById("linkIco").addEventListener("click",function(){
        generateCode(false);
    });

    document.getElementById("imgIco").addEventListener("click",function(){
        generateCode(true);
    });

    document.getElementById("tableIco").addEventListener("click",function(){

        if ($('#tableeditor').length > 0) {
            alert("Cancel the current table first");
            return;
        }

        var c = prompt("Column quantity: ", "");
        var r = prompt("Row quantity: ", "");
        generateTableEditor(c, r);
    });
}
function addTag(prefix, suffix) {
    var sel_txt = commentArea.value.substring(commentArea.selectionStart, commentArea.selectionEnd);
    
    if (sel_txt !== ""){
        
        if(prefix == "* "){
           var lines = sel_txt.split('\n');
            sel_txt = "";
            for(var i = 0; i < lines.length; i++){
               lines[i] = "* " + lines[i] + "\n";
               sel_txt += lines[i];
            }
            replace = sel_txt;
        }
        else{
           var replace = prefix + sel_txt + suffix;
            if(/\s+$/.test(sel_txt))
               replace = prefix + sel_txt.slice(0, -1) + suffix + " ";
        }
           commentArea.value = commentArea.value.substring(0,commentArea.selectionStart) + replace + commentArea.value.substring(commentArea.selectionEnd, commentArea.value.length);
    }
    commentArea.focus();
}

function generateCode(isImage) {
    var sel_txt = commentArea.value.substring(commentArea.selectionStart, commentArea.selectionEnd);
    var url = prompt("Enter the URL: ", "");
    if(!url) 
        return;
    if (sel_txt === "")
       var txt = prompt("Enter a text: ", "");
    var b = "[";
    if(isImage)
        b = "![";
    if (sel_txt === "")
        commentArea.value = commentArea.value.substring(0,commentArea.selectionStart) + b + txt + "](" + url + ")" + commentArea.value.substring(commentArea.selectionEnd, commentArea.value.length);
    else
        commentArea.value = commentArea.value.substring(0,commentArea.selectionStart) + b + sel_txt + "](" + url + ")" + commentArea.value.substring(commentArea.selectionEnd, commentArea.value.length);
    commentArea.focus();
}

function generateTableEditor(cols, rows) {
    var tableEditor = $('<center><table id="tableeditor"><tbody>');
    for(var r = 0; r < rows; r++)
    {
        var tr = $('<tr>');
        for (var c = 0; c < cols; c++)
            if(r === 0)
                $('<td><span class="commentTable" style="width: 100px; height: 20px; display: inline-block; border: 1px solid black; overflow: hidden; background-color:lightgreen " contenteditable></span></td>').appendTo(tr);
            else
                $('<td><span class="commentTable" style="width: 100px; height: 20px; display: inline-block; border: 1px solid black; overflow: hidden;" contenteditable></span></td>').appendTo(tr);
        tr.appendTo(tableEditor);
    }
    $(commentArea).after(tableEditor);
    $(tableEditor).after('<br> <center> <p id="createtable" style="cursor: pointer; width: 100px; color: red; text-decoration: underline;">Add Table</p><br><p id="canceltable" style="cursor: pointer; width: 100px; color: red; text-decoration: underline;">Cancel</p> </center></center>');

    document.getElementById("createtable").addEventListener("click",function(){
        CreateTable(cols, rows);
    });
    document.getElementById("canceltable").addEventListener("click",function(){
        $(tableEditor).remove();
        $(createtable).remove();
        $(canceltable).remove();

    });
}

function CreateTable(cols, rows) {
    var codeTable="";

    var tableEditor = document.getElementsByClassName('commentTable');
    var f = 0;
    for(var i = 0; i< rows; i++){
        codeTable += '\n';

        if(i == 1){

            var headerLine = "";
            for(var k = 0; k < cols; k++){
                headerLine += "------------- |";
            }
            codeTable += headerLine + '\n';
        }

        f = i * (cols-1);
        for(var j = 0; j< cols; j++){
            codeTable += tableEditor[i+j+f].innerHTML + " | ";
        }
    }


    var sel_txt = commentArea.value.substring(commentArea.selectionStart, commentArea.selectionEnd);
    if (sel_txt === "") commentArea.value = commentArea.value.substring(0,commentArea.selectionStart) + codeTable + commentArea.value.substring(commentArea.selectionEnd, commentArea.value.length);
    commentArea.focus();
}

//***************************************************************************** Multiquote

$(document).ready(function () {
    if (location.href.indexOf("viewtopic&topicid") > -1) {
        
        var i = 0;
        var quotes = "";
        
        $("a:contains('Quote')").after('<p class="multiquote" style="font-size:14px; display: inline; cursor: pointer; width: 100px; color: #990000;"> +</p>');
        
        var quote = document.getElementsByClassName("multiquote");
        var messages = document.getElementsByClassName("forumpost display_emo");
        var commentArea = document.getElementById("newcomment");
        var users = $('a[href*="profiles/"]');

        for (var i = 0; i < 50; i++) {
             eval("var addQuote" + i + "= function() { addQuote(" + i + "); };");
        }
        
        function addQuote(n){
            quotes = "Originally posted by " + users[n + 3].innerHTML + "\n\n";
            quotes += messages[n].innerHTML;
            commentArea.value += htmlToFormat(quotes);
            commentArea.value += "\n#####\n\n\n";
            if ($('#floatingQuotes').length == 0){
                $("body").prepend("<div id='floatingQuotes' style='z-index: 100000; position: fixed; right: 0px; top: 0px; padding-right: 10px; padding-left: 10px; background: white; border: 1px solid rgb(221, 221, 221);'><h4>QUOTING<br>" + users[n + 3].innerHTML + "<br></4></div>");
                destroyPopup();
            }
       }
        
        function destroyPopup() {
            setTimeout(function(){ $( "#floatingQuotes" ).remove(); }, 1000);
        }
        
        function htmlToFormat(text){
            
            var lines = text.split('\n');
            text = "";
            for(var i = 0;i < lines.length; i++){
                lines[i] = replaceTags(lines[i]);
                if(lines[i].includes("Originally posted by") && i > 0)
                    lines[i] = "> " + lines[i] + ": \n";
                else
                    lines[i] = "> " + lines[i] + "\n";
                text += lines[i];
            }
            return text;
        }
        
        function replaceTags(text){
            var subs = ["<p>", "", "</p>", "", "<h2>", "##", "</h2>", "", "<h3>", "###",
                        "</h3>", "", "<h4>", "####", "</h4>", "", "<hr>", "___\n", "<strong>", "**",
                        "</strong>", "**", "<ul>", "", "</ul>", "", "<li>", "* ", "</li>", ""];
            for(var i = 0;i < subs.length; i = i+2){
                text = text.replace(subs[i], subs[i + 1]);
            }
            return text;
        }
        for (var i = 0; i < quote.length; i++) {
            quote[i].addEventListener('click', eval("addQuote" + i), false);
        }
    }
});


