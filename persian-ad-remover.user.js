// ==UserScript==
// @name         persian-ad-remover
// @namespace    https://github.com/shayax/persian-ad-remover
// @version      1.0
// @description Removes ads from some persian download sites.
// @author      https://github.com/shayax/
// @include      http://*p30download.com/*
// @include      http://*downloadha.com/*
// @include      http://*softgozar.com/*
// @include      http://*download.ir/*
// @include      http://*mihandownload.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
// @run-at document-end
var siteUrl = window.location.href;
var dlha = siteUrl.search("downloadha.com");
var p30dl = siteUrl.search("p30download.com");
var softGoz = siteUrl.search("softgozar.com");
var dlir = siteUrl.search("download.ir");
var mihandl = siteUrl.search("mihandownload.com");
if (dlha >= 0) {
    document.querySelector("div.spbanners").remove();
    document.querySelector("div.topbanners468").remove();
	//    document.querySelector(".rightsidebar").remove();
    document.querySelector(".leftsidebar").remove();
    var adRem0 = document.querySelectorAll("div.entry-etc");
    for (i = 0; i < adRem0.length; i++) {
        adRem0[i].remove();
    }
    var adRem1 = document.getElementsByTagName("center");
    for (i = 0; i < adRem1.length; i++) {
        adRem1[i].remove();
    }
} else if (p30dl >= 0) {
    var adRem2 = document.querySelectorAll(".tabliq-468");
    for (i = 0; i < adRem2.length; i++) {
        adRem2[i].remove();
    }
    var adRem3 = document.getElementsByTagName("iframe");
    for (i = 0; i < adRem3.length; i++) {
        adRem3[i].remove();
    }
    document.querySelector("#content > div").remove();
    document.querySelector(".product-wrapper").remove();
    document.querySelector(".blogroll").remove();
    document.querySelector("#sidebar").remove();
    document.querySelector("#main-content > div:nth-child(1)").remove();
} else if (softGoz >= 0) {
    document.querySelector("div.MainBanner").remove();
    document.querySelector("#dtlAdvertiseBan").remove();
    document.querySelector("#dtlClaim").remove();
    document.querySelector("#MasterTable > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(8) > td:nth-child(1)").remove();
    document.querySelector("#cphMaster_dtlAdvertiseWBan").remove();
    document.querySelector("#cphMaster_dtlAdvertiseM1").remove();
    document.querySelector("#cphMaster_dtlAdvertiseW2Ban").remove();
    document.querySelector("#cphMaster_dtlAdvertiseD1Ban").remove();
    document.querySelector("#dtlAdvertiseBTM").remove();
    document.querySelector("#anetwork-261045").remove();
    document.querySelector("#cphMaster_dtlAdvertiseS1Ban").remove();
    document.querySelector("#dtlAdvertiseBTM").remove();

} else if (dlir >= 0) {
    document.querySelector("#header").remove();
    document.querySelector("#text-7").remove();
    document.querySelector(".related").remove();
} else if (mihandl >= 0) {
    document.querySelector(".head-ads").remove();
    document.querySelector("#enhancedtextwidget-5").remove();
    document.querySelector("#enhancedtextwidget-6").remove();
    document.querySelector("#enhancedtextwidget-20").remove();
    var adRem4 = document.querySelectorAll(".well");
    for (i = 0; i < adRem4.length; i++) {
        adRem4[i].remove();
    }
    var adRem5 = document.querySelectorAll(".widget-adds");
    for (i = 0; i < adRem5.length; i++) {
        adRem5[i].remove();
    }
} else {}