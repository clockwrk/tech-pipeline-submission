"use strict";var app=angular.module("myApp",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(o,e,l){$locationProvider.html5Mode({enabled:!0,requireBase:!1}),e.otherwise("/home"),console.log("here")}]),console.log(" in landingController"),app.controller("landingController",["$scope",function(o){console.log("landingController loaded")}]),console.log("landpage state"),app.config(["$stateProvider",function(o){console.log("hi"),o.state("home",{url:"/home",templateUrl:"/js/landing/landPage.html",controller:"landingController"})}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJhcHAuanMiLCJsYW5kaW5nL2xhbmRQYWdlLmNvbnRyb2xsZXIuanMiLCJsYW5kaW5nL2xhbmRQYWdlLnN0YXRlLmpzIl0sIm5hbWVzIjpbImFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsImxvY2F0aW9uUHJvdmlkZXIiLCIkbG9jYXRpb25Qcm92aWRlciIsImh0bWw1TW9kZSIsImVuYWJsZWQiLCJyZXF1aXJlQmFzZSIsIm90aGVyd2lzZSIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9sbGVyIiwiJHNjb3BlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCJdLCJtYXBwaW5ncyI6IkFBQUEsWUNBQSxJQUFBQSxLQUFBQyxRQUFBQyxPQUFBLFNBQUEsYUFFQUYsS0FBQUcsUUFBQSxpQkFBQSxxQkFBQSxvQkFBQSxTQUFBQyxFQUFBQyxFQUFBQyxHQUNBQyxrQkFBQUMsV0FDQUMsU0FBQSxFQUNBQyxhQUFBLElBRUFMLEVBQUFNLFVBQUEsU0FDQUMsUUFBQUMsSUFBQSxXQ1JBRCxRQUFBQyxJQUFBLHlCQUVBYixJQUFBYyxXQUFBLHFCQUFBLFNBQUEsU0FBQUMsR0FDQUgsUUFBQUMsSUFBQSwrQkNIQUQsUUFBQUMsSUFBQSxrQkFDQWIsSUFBQUcsUUFBQUEsaUJBQUEsU0FBQUMsR0FDQVEsUUFBQUMsSUFBQSxNQUNBVCxFQUFBWSxNQUFBLFFBQ0FDLElBQUEsUUFDQUMsWUFBQSw0QkFDQUosV0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWyd1aS5yb3V0ZXInXSk7XG5cbmFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgbG9jYXRpb25Qcm92aWRlcikge1xuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlXG4gIH0pO1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaG9tZScpO1xuICBjb25zb2xlLmxvZygnaGVyZScpO1xufV0pO1xuXG4vL1xuLy8gYXBwLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG4vLyAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcbi8vICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbi8vICAgICAgICAgcmVxdWlyZUJhc2U6IGZhbHNlXG4vLyAgICAgfSk7XG4vLyAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xuXG4vLyAgICAgJHN0YXRlUHJvdmlkZXJcbi8vICAgICBcdC5zdGF0ZSgnaG9tZScsIHtcbi8vICAgICBcdFx0dXJsOicvaG9tZScsXG4vLyAgICAgXHRcdHZpZXdzOntcbi8vICAgICBcdFx0XHQnQCc6e1xuLy8gICAgIFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvanMvbGFuZGluZy9sYW5kUGFnZS5odG1sJ1xuLy8gICAgIFx0XHRcdH1cbi8vICAgICBcdFx0fVxuLy8gICAgIFx0fSlcblxuXG4vLyB9XSk7XG5jb25zb2xlLmxvZygnIGluIGxhbmRpbmdDb250cm9sbGVyJyk7XG5cbmFwcC5jb250cm9sbGVyKCdsYW5kaW5nQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgY29uc29sZS5sb2coJ2xhbmRpbmdDb250cm9sbGVyIGxvYWRlZCcpO1xufSk7XG5jb25zb2xlLmxvZygnbGFuZHBhZ2Ugc3RhdGUnKTtcbmFwcC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gIGNvbnNvbGUubG9nKCdoaScpO1xuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsIHtcbiAgICB1cmw6ICcvaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICcvanMvbGFuZGluZy9sYW5kUGFnZS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnbGFuZGluZ0NvbnRyb2xsZXInXG4gIH0pO1xuXG4gIC8vICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdwcm9qZWN0cycsIHtcbiAgLy8gICAgIHVybDogJy9wcm9qZWN0cycsXG4gIC8vICAgICB0ZW1wbGF0ZVVybDogJy9qcy9wcm9qZWN0cy9wcm9qZWN0cy5odG1sJyxcbiAgLy8gICAgIGNvbnRyb2xsZXI6ICdwcm9qZWN0Q29udHJvbGxlcicsXG4gIC8vICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxuICAvLyAgICAgcmVzb2x2ZToge1xuICAvLyAgICAgICAgIGFsbFByb2plY3RzOiBmdW5jdGlvbihwcm9qZWN0RmFjdG9yeSkge1xuICAvLyAgICAgICAgICAgICByZXR1cm4gcHJvamVjdEZhY3RvcnkuZ2V0QWxsUHJvamVjdHMoKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vIH0pXG59KTsiLCJsZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWyd1aS5yb3V0ZXInXSk7XG5cbmFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInICxmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCBsb2NhdGlvblByb3ZpZGVyKXtcblx0ICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIHJlcXVpcmVCYXNlOiBmYWxzZVxuICAgIH0pO1xuXHQgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcbmNvbnNvbGUubG9nKCdoZXJlJyk7XG5cbn1dKVxuXG4vL1xuLy8gYXBwLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG4vLyAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcbi8vICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbi8vICAgICAgICAgcmVxdWlyZUJhc2U6IGZhbHNlXG4vLyAgICAgfSk7XG4vLyAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xuXG4vLyAgICAgJHN0YXRlUHJvdmlkZXJcbi8vICAgICBcdC5zdGF0ZSgnaG9tZScsIHtcbi8vICAgICBcdFx0dXJsOicvaG9tZScsXG4vLyAgICAgXHRcdHZpZXdzOntcbi8vICAgICBcdFx0XHQnQCc6e1xuLy8gICAgIFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvanMvbGFuZGluZy9sYW5kUGFnZS5odG1sJ1xuLy8gICAgIFx0XHRcdH1cbi8vICAgICBcdFx0fVxuLy8gICAgIFx0fSlcblxuXG4vLyB9XSk7IiwiY29uc29sZS5sb2coJyBpbiBsYW5kaW5nQ29udHJvbGxlcicpXG5cbmFwcC5jb250cm9sbGVyKCdsYW5kaW5nQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUpIHtcblx0Y29uc29sZS5sb2coJ2xhbmRpbmdDb250cm9sbGVyIGxvYWRlZCcpXG59KSIsImNvbnNvbGUubG9nKCdsYW5kcGFnZSBzdGF0ZScpXG5hcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgY29uc29sZS5sb2coJ2hpJylcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hvbWUnLHtcbiAgICBcdHVybDonL2hvbWUnLFxuICAgIFx0dGVtcGxhdGVVcmw6Jy9qcy9sYW5kaW5nL2xhbmRQYWdlLmh0bWwnLFxuICAgIFx0Y29udHJvbGxlcjogJ2xhbmRpbmdDb250cm9sbGVyJ1xuICAgIFx0fSlcbiAgICBcbiAgICAvLyAkc3RhdGVQcm92aWRlci5zdGF0ZSgncHJvamVjdHMnLCB7XG4gICAgLy8gICAgIHVybDogJy9wcm9qZWN0cycsXG4gICAgLy8gICAgIHRlbXBsYXRlVXJsOiAnL2pzL3Byb2plY3RzL3Byb2plY3RzLmh0bWwnLFxuICAgIC8vICAgICBjb250cm9sbGVyOiAncHJvamVjdENvbnRyb2xsZXInLFxuICAgIC8vICAgICBhdXRoZW50aWNhdGU6IGZhbHNlLFxuICAgIC8vICAgICByZXNvbHZlOiB7XG4gICAgLy8gICAgICAgICBhbGxQcm9qZWN0czogZnVuY3Rpb24ocHJvamVjdEZhY3RvcnkpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gcHJvamVjdEZhY3RvcnkuZ2V0QWxsUHJvamVjdHMoKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH0pXG59KVxuIl19
