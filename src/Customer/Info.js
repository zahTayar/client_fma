import React, { Component } from "react";
import "./Style.css";

class Info extends Component {
  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <hr
          style={{
            width: "900px",
            borderTopColor: "rgba(0,0,0,0.10196078431372549)",
          }}
        />
        <img
          alt=""
          style={{
            height: "30px",
            width: "30px",
            marginLeft: "1120px",
            marginTop: "30px",
            position: "absolute",
            zIndex: 2,
          }}
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDA2IDUxMi4wMDYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyLjAwNiA1MTIuMDA2IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0yMTYuMDA2IDIwNi4wMDNjLTI5LjA1OCAwLTUwIDI0LjMxNi01MCA1My44NCAwIDMyLjQ1IDI0Ljk3NSA1My43MjkgNjIuNzggODUuOTM5IDYuNTg4IDUuNjEzIDEzLjQwMSAxMS40MTggMjAuNjM2IDE3Ljc0NyAxLjg4NSAxLjY0OSA0LjIzNCAyLjQ3NCA2LjU4NCAyLjQ3NHM0LjY5OS0uODI0IDYuNTg0LTIuNDc0YzcuMjM1LTYuMzI5IDE0LjA0OC0xMi4xMzQgMjAuNjM2LTE3Ljc0NyAzNy44MDUtMzIuMjEgNjIuNzgtNTMuNDg5IDYyLjc4LTg1LjkzOSAwLTI5LjUyNy0yMC45NDctNTMuODQtNTAtNTMuODQtMTkuODY0IDAtMzIuNDYzIDExLjM0Mi00MCAyMi4yOTUtNy41MzYtMTAuOTUzLTIwLjEzNi0yMi4yOTUtNDAtMjIuMjk1em00OS42NDQgNDcuNjQ2Yy4wNzYtLjI3NiA3Ljg0My0yNy42NDYgMzAuMzU2LTI3LjY0NiAxNy4xMDMgMCAzMCAxNC41NDggMzAgMzMuODQgMCAyMy4yMTUtMjAuOTg1IDQxLjA5NS01NS43NTEgNzAuNzE2LTQuNjEzIDMuOTMxLTkuMzM1IDcuOTU0LTE0LjI0OSAxMi4xOTctNC45MTQtNC4yNDMtOS42MzYtOC4yNjctMTQuMjQ5LTEyLjE5Ny0zNC43NjYtMjkuNjIxLTU1Ljc1MS00Ny41MDEtNTUuNzUxLTcwLjcxNiAwLTE5LjI5MiAxMi44OTctMzMuODQgMzAtMzMuODQgMjIuMjI2IDAgMzAuMDExIDI2LjQzIDMwLjM2NCAyNy42NzUgMS4yMDEgNC4zMjggNS4xNDIgNy4zMjUgOS42MzYgNy4zMjUgNC41MDQgMCA4LjQ1Mi0zLjAxMSA5LjY0NC03LjM1NHoiLz48Y2lyY2xlIGN4PSIxMjYuMDA2IiBjeT0iMTAyLjAwMyIgcj0iMTAiLz48cGF0aCBkPSJtNDQ3Ljc4NiAyMzcuODM3YzcuMDEyIDUuMzQzIDE1LjM4NyA4LjE2NiAyNC4yMiA4LjE2NiAyMi4wNTYgMCA0MC0xNy45NDQgNDAtNDAgMC0xMi41OTktNS43NTMtMjQuMjAzLTE1Ljc0Ni0zMS44MDlsLTUwLjI1NC0zOC42MjF2LTEyNS41N2MwLTUuNTIyLTQuNDc3LTEwLTEwLTEwaC02MGMtNS41MjMgMC0xMCA0LjQ3OC0xMCAxMHY2NC4wODlsLTg1Ljc4LTY1LjkyM2MtNy4wMTItNS4zNDMtMTUuMzg3LTguMTY2LTI0LjIyLTguMTY2cy0xNy4yMDggMi44MjMtMjQuMjU0IDguMTkxbC03Ni4xMzkgNTguNTE1Yy00LjM3OSAzLjM2NS01LjIwMSA5LjY0NC0xLjgzNSAxNC4wMjIgMy4zNjUgNC4zNzggOS42NDQgNS4yMDEgMTQuMDIzIDEuODM1bDc2LjEwNS01OC40ODljMy40OTktMi42NjUgNy42ODMtNC4wNzQgMTIuMS00LjA3NHM4LjYwMSAxLjQwOSAxMi4wNjcgNC4wNDlsMjE2LjAzNyAxNjYuMDI4YzUuMDE4IDMuODE5IDcuODk2IDkuNjIzIDcuODk2IDE1LjkyMyAwIDExLjAyOC04Ljk3MiAyMC0yMCAyMC00LjQxNyAwLTguNjAxLTEuNDA5LTEyLjA2NC00LjA0Ny0xMS4yMDItOC42MTUtMTg4LjgwMy0xNDUuMjEtMTk3LjgzOS0xNTIuMTYtMy40NjctMi42NjctOC4yNjUtMi43NzEtMTEuODQ1LS4yNTYtLjQ1My4zMTctMTk4LjEzNSAxNTIuMzc1LTE5OC4xNTYgMTUyLjM5Mi00LjAwOSAzLjA1OC05LjAyMSA0LjQ2NS0xNC4xMzMgMy45NjgtOS45MDItLjk1OS0xNS4yNzQtNS42MTYtMTcuNDItMTUuMTA0LTEuNzk4LTcuOTQ5IDEuMDIxLTE1Ljg4OSA3LjM5LTIwLjc0NGw2OC41MjktNTIuNjY1YzQuMzc5LTMuMzY1IDUuMjAxLTkuNjQ0IDEuODM1LTE0LjAyMnMtOS42NDUtNS4yMDEtMTQuMDIzLTEuODM1bC02OC40OTYgNTIuNjRjLTEyLjY0IDkuNjM2LTE4LjI4OCAyNS4zNjEtMTQuNzQxIDQxLjAzOSA0LjA1NyAxNy45MzggMTYuNDg3IDI4LjgwNSAzNC45OTEgMzAuNTk2IDEwLjE0NS45OTMgMjAuMTU3LTEuODM5IDI4LjE5Ny03Ljk3MWwtLjAxNS0uMDE5Yy40MjUtLjMxMyAxLjAwNS0uNzUgMS43OTEtMS4zNXYxMzcuMTk5Yy0yMi44ODEgNS40ODgtNDAuNTc1IDI0LjEwNS00NC44IDQ3LjY3OC0xMy4xOTIgOS4zMjgtMjEuMiAyNC40ODItMjEuMiA0MC42NiAwIDI3LjU3IDIyLjQzIDUwIDUwIDUwaDQxMmMyNy41NyAwIDUwLTIyLjQzIDUwLTUwIDAtMTYuMTc4LTguMDA4LTMxLjMzMi0yMS4yLTQwLjY2LTQuMjI2LTIzLjU4My0yMS45MzItNDIuMjA2LTQ0LjgtNDcuNjgydi0xMzcuMTkyem0tNjEuNzgtMjE3LjgzNGg0MHYxMDAuMmwtNDAtMzAuNzQxem0tMjI2IDQ3MmgtMTEwYy0xNi41NDIgMC0zMC0xMy40NTgtMzAtMzAgMC0xMC42ODUgNS44OTUtMjAuNjQ3IDE1LjM4NC0yNiAyLjg0OS0xLjYwNyA0LjczMS00LjUwNiA1LjA0Mi03Ljc2MyAxLjk1NS0yMC41MzMgMTguOTU0LTM2LjIzNyAzOS41NzUtMzYuMjM3IDEyLjg3NyAwIDI1LjA2MiA2LjM0MiAzMi41OTIgMTYuOTYzIDIuMzYgMy4zMjggNi41MDUgNC44OSAxMC40NzUgMy45NDQgMi41NjMtLjYxIDQuODMxLS45MDcgNi45MzMtLjkwNyAxNi4xNDkgMCAyOS44MDIgMTIuOTcgMjkuOTk4IDI5LjY0Ny0uODUyIDYuMDEyIDIuMzYyIDEwLjEyMyA2LjUzMiAxMS41NzYgNy43NCAyLjY5NiAxMy40NyAxMC4wMTQgMTMuNDcgMTguNzc2LS4wMDEgMTEuMDI5LTguOTczIDIwLjAwMS0yMC4wMDEgMjAuMDAxem0xNzIuMjE2LTU0LjY0NGMtNi4xODEgMy40OTctMTEuMjgzIDguNTQtMTQuODI2IDE0LjY0NWgtMTIyLjc4M2MtMy41NDUtNi4xMDctOC42NDUtMTEuMTQ5LTE0LjgyMy0xNC42NDUtLjE2OC0xLjgwMS0uNDM0LTMuNTg4LS43OTQtNS4zNjVoMTU0LjAyMWMtLjM2IDEuNzc2LS42MjYgMy41NjQtLjc5NSA1LjM2NXptLTEzNy41ODQgNTQuNjQ0YzMuNDEzLTUuODg3IDUuMzY4LTEyLjcyIDUuMzY4LTIwaDExMmMwIDcuMjggMS45NTYgMTQuMTEzIDUuMzY4IDIwem0yNzYuOTQzLTYzLjc2M2MuMzEgMy4yNTcgMi4xOTMgNi4xNTUgNS4wNDIgNy43NjMgOS40ODkgNS4zNTMgMTUuMzg0IDE1LjMxNSAxNS4zODQgMjYgMCAxNi41NDItMTMuNDU4IDMwLTMwIDMwaC0xMTBjLTExLjAyOCAwLTIwLTguOTcyLTIwLTIwIDAtOC43NzIgNS43NC0xNi4wODQgMTMuNDctMTguNzc2IDQuMjA2LTEuNDY1IDcuMzc5LTUuNTk5IDYuNTMyLTExLjU3Ni4xOTYtMTYuNjM1IDEzLjgxLTI5LjY0NyAyOS45OTgtMjkuNjQ3IDIuMTAyIDAgNC4zNy4yOTcgNi45MzMuOTA3IDMuOTY3Ljk0NCA4LjExNS0uNjE1IDEwLjQ3NS0zLjk0NCA3LjUzMS0xMC42MjEgMTkuNzE1LTE2Ljk2MyAzMi41OTItMTYuOTYzIDIwLjYxMy0uMDAxIDM3LjYxNyAxNS42ODUgMzkuNTc0IDM2LjIzNnptLTQ1LjU3NS01NS45MjJjLTE0Ljk0NSAxLjUyMy0yOC44NTYgOC42NzQtMzguODY2IDE5Ljk4NS0xLjc0Ny0uMi0zLjQ1MS0uMy01LjEzNC0uMy0xNS43NzcgMC0zMC41OTggNy41NC0zOS45NzkgMjBoLTE3Mi4wNDFjLTkuMzc3LTEyLjQ1Ny0yNC4yMDEtMjAtMzkuOTgtMjAtMS42ODQgMC0zLjM4OC4xLTUuMTM0LjMtMTAuMDEtMTEuMzEyLTIzLjkyLTE4LjQ2Mi0zOC44NjYtMTkuOTg1di0xNTEuMjI5YzE0LjUxNi0xMS4xNjUgMTUzLjI5Ni0xMTcuOTA3IDE2OS45OTktMTMwLjc1MWwxNzAuMDAxIDEzMC43NDl6Ii8+PC9nPjwvc3ZnPg=="
        />
        <h5
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            direction: "rtl",
            marginLeft: "1030px",
            marginTop: "3px",
            fontWeight: "bolder",
            fontSize: "18px",
            textDecoration: "underline",
          }}>
          קצת עלינו
        </h5>
        <p
          className="regular"
          style={{
            position: "absolute",
            zIndex: 0,
            width: "830px",
            direction: "rtl",
            marginLeft: "265px",
            marginTop: "30px",
            fontWeight: "bold",
          }}>
          בן נריה מציג אינטרפרטציה אישית ומקומית למאכלי רחוב מחמש מדינות בדרום
          מזרח אסיה: הודו, סין, תאילנד, וייטנאם וקמבודיה. טרם פתיחת המסעדה יצא
          בן נריה למסע קולינרי-תרבותי בן שלושה חודשים במדינות אלו וחקר מאכלי
          רחוב, טקסטורות, צבעים, תבלינים וטעמים. לאחר שובו לישראל, התקיים שלב
          תכנון המתחם ובמקביל התכנסנות לתקופה של כחצי שנה אינטנסיבית במטבח
          מקצועי זמני בו תוכננו, בושלו, ותועדו כל המנות עד לפרטי פרטים.
        </p>
        <hr
          style={{
            height: "120px",
            width: "0px",
            marginLeft: "1100px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
            position: "relative",
            zIndex: -1,
          }}
        />

        <hr
          style={{
            width: "900px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
          }}
        />
        <img
          alt=""
          style={{
            height: "30px",
            width: "30px",
            marginLeft: "1120px",
            marginTop: "30px",
            position: "absolute",
            zIndex: 2,
          }}
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTI1NiwwQzE2MS44OTYsMCw4NS4zMzMsNzYuNTYzLDg1LjMzMywxNzAuNjY3YzAsMjguMjUsNy4wNjMsNTYuMjYsMjAuNDksODEuMTA0TDI0Ni42NjcsNTA2LjUNCgkJCQljMS44NzUsMy4zOTYsNS40NDgsNS41LDkuMzMzLDUuNXM3LjQ1OC0yLjEwNCw5LjMzMy01LjVsMTQwLjg5Ni0yNTQuODEzYzEzLjM3NS0yNC43NiwyMC40MzgtNTIuNzcxLDIwLjQzOC04MS4wMjENCgkJCQlDNDI2LjY2Nyw3Ni41NjMsMzUwLjEwNCwwLDI1NiwweiBNMzg3LjUxLDI0MS40NDhMMjU2LDQ3OS4yOTJsLTEzMS40NTgtMjM3Ljc1Yy0xMS42OTgtMjEuNjQ2LTE3Ljg3NS00Ni4xNTYtMTcuODc1LTcwLjg3NQ0KCQkJCWMwLTgyLjM0NCw2Ni45OS0xNDkuMzMzLDE0OS4zMzMtMTQ5LjMzM3MxNDkuMzMzLDY2Ljk5LDE0OS4zMzMsMTQ5LjMzM0M0MDUuMzMzLDE5NS4zODUsMzk5LjE1NiwyMTkuODk2LDM4Ny41MSwyNDEuNDQ4eiIvPg0KCQkJPHBhdGggZD0iTTI1Niw4NS4zMzNjLTQ3LjA1MiwwLTg1LjMzMywzOC4yODEtODUuMzMzLDg1LjMzM0MxNzAuNjY3LDIxNy43MTksMjA4Ljk0OCwyNTYsMjU2LDI1NnM4NS4zMzMtMzguMjgxLDg1LjMzMy04NS4zMzMNCgkJCQlDMzQxLjMzMywxMjMuNjE1LDMwMy4wNTIsODUuMzMzLDI1Niw4NS4zMzN6IE0yNTYsMjM0LjY2N2MtMzUuMjkyLDAtNjQtMjguNzA4LTY0LTY0YzAtMzUuMjkyLDI4LjcwOC02NCw2NC02NHM2NCwyOC43MDgsNjQsNjQNCgkJCQlDMzIwLDIwNS45NTgsMjkxLjI5MiwyMzQuNjY3LDI1NiwyMzQuNjY3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
        />
        <h5
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            direction: "rtl",
            marginLeft: "1050px",
            marginTop: "3px",
            fontWeight: "bolder",
            fontSize: "18px",
            textDecoration: "underline",
          }}>
          כתובת
        </h5>
        <p
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "150px",
            direction: "rtl",
            marginLeft: "945px",
            marginTop: "30px",
            fontWeight: "bold",
          }}>
          מבצע קדש 38, תל אביב
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.co.il/maps/place/32%C2%B006'48.7%22N+34%C2%B049'04.6%22E/@32.11353,34.8184832,19z/data=!3m1!4b1!4m14!1m7!3m6!1s0x151d49761dc557af:0x2dcb5694ac12dffe!2z157Xkdem16Ig16fXk9epIDM2LTM4LCDXqtecINeQ15HXmdeRINeZ16TXlQ!3b1!8m2!3d32.1135344!4d34.8180591!3m5!1s0x0:0x0!7e2!8m2!3d32.11353!4d34.8179357"
          className="regular"
          style={{
            position: "absolute",
            zIndex: 2,
            marginLeft: "1025px",
            marginTop: "50px",
          }}>
          נווט לכתובת
        </a>
        <hr
          style={{
            height: "100px",
            width: "0px",
            marginLeft: "1100px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
            position: "relative",
            zIndex: -1,
          }}
        />

        <hr
          style={{
            width: "900px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
          }}
        />
        <img
          alt=""
          style={{
            height: "30px",
            width: "30px",
            marginLeft: "1120px",
            marginTop: "30px",
            position: "absolute",
            zIndex: 2,
          }}
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyLjAyMSA1MTIuMDIxIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMi4wMjEgNTEyLjAyMSIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJtMzY3Ljk4OCA1MTIuMDIxYy0xNi41MjggMC0zMi45MTYtMi45MjItNDguOTQxLTguNzQ0LTcwLjU5OC0yNS42NDYtMTM2LjEyOC02Ny40MTYtMTg5LjUwOC0xMjAuNzk1cy05NS4xNS0xMTguOTEtMTIwLjc5NS0xODkuNTA4Yy04LjI0MS0yMi42ODgtMTAuNjczLTQ2LjEwOC03LjIyNi02OS42MTIgMy4yMjktMjIuMDE2IDExLjc1Ny00My4zODkgMjQuNjYzLTYxLjgwOSAxMi45NjMtMTguNTAxIDMwLjI0NS0zMy44ODkgNDkuOTc3LTQ0LjUgMjEuMDQyLTExLjMxNSA0NC4wMDktMTcuMDUzIDY4LjI2NS0xNy4wNTMgNy41NDQgMCAxNC4wNjQgNS4yNzEgMTUuNjQ1IDEyLjY0N2wyNS4xMTQgMTE3LjE5OWMxLjEzNyA1LjMwNy0uNDk0IDEwLjgyOS00LjMzMSAxNC42NjdsLTQyLjkxMyA0Mi45MTJjNDAuNDgyIDgwLjQ4NiAxMDYuMTcgMTQ2LjE3NCAxODYuNjU2IDE4Ni42NTZsNDIuOTEyLTQyLjkxM2MzLjgzOC0zLjgzNyA5LjM2MS01LjQ2NiAxNC42NjctNC4zMzFsMTE3LjE5OSAyNS4xMTRjNy4zNzcgMS41ODEgMTIuNjQ3IDguMTAxIDEyLjY0NyAxNS42NDUgMCAyNC4yNTYtNS43MzggNDcuMjI0LTE3LjA1NCA2OC4yNjYtMTAuNjExIDE5LjczMi0yNS45OTkgMzcuMDE0LTQ0LjUgNDkuOTc3LTE4LjQxOSAxMi45MDYtMzkuNzkyIDIxLjQzNC02MS44MDkgMjQuNjYzLTYuODk5IDEuMDEzLTEzLjc5NyAxLjUxOC0yMC42NjggMS41MTl6bS0yMzYuMzQ5LTQ3OS4zMjFjLTMxLjk5NSAzLjUzMi02MC4zOTMgMjAuMzAyLTc5LjI1MSA0Ny4yMTctMjEuMjA2IDMwLjI2NS0yNi4xNTEgNjcuNDktMTMuNTY3IDEwMi4xMzIgNDkuMzA0IDEzNS43MjYgMTU1LjQyNSAyNDEuODQ3IDI5MS4xNTEgMjkxLjE1MSAzNC42NDEgMTIuNTg0IDcxLjg2NiA3LjY0IDEwMi4xMzItMTMuNTY3IDI2LjkxNS0xOC44NTggNDMuNjg1LTQ3LjI1NiA0Ny4yMTctNzkuMjUxbC05NS4zNDEtMjAuNDMtNDQuODE2IDQ0LjgxNmMtNC43NjkgNC43NjktMTIuMDE1IDYuMDM2LTE4LjExNyAzLjE2OC05NS4xOS00NC43Mi0xNzIuMjQyLTEyMS43NzItMjE2Ljk2Mi0yMTYuOTYyLTIuODY3LTYuMTAzLTEuNjAxLTEzLjM0OSAzLjE2OC0xOC4xMTdsNDQuODE2LTQ0LjgxNnoiLz48L2c+PC9zdmc+"
        />
        <h5
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            direction: "rtl",
            marginLeft: "1060px",
            marginTop: "3px",
            fontWeight: "bolder",
            fontSize: "18px",
            textDecoration: "underline",
          }}>
          טלפון
        </h5>
        <p
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "150px",
            direction: "rtl",
            marginLeft: "945px",
            marginTop: "30px",
            fontWeight: "bold",
          }}>
          03-7688600
        </p>
        <hr
          style={{
            height: "100px",
            width: "0px",
            marginLeft: "1100px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
            position: "relative",
            zIndex: -1,
          }}
        />

        <hr
          style={{
            width: "900px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
          }}
        />
        <img
          alt=""
          style={{
            height: "30px",
            width: "30px",
            marginLeft: "1120px",
            marginTop: "80px",
            position: "absolute",
            zIndex: 2,
          }}
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iSWNvbnMiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNzQgNzQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTM3IDcyYTM1IDM1IDAgMSAxIDM1LTM1IDM1LjA0IDM1LjA0IDAgMCAxIC0zNSAzNXptMC02OGEzMyAzMyAwIDEgMCAzMyAzMyAzMy4wMzcgMzMuMDM3IDAgMCAwIC0zMy0zM3oiLz48cGF0aCBkPSJtMzcgNjZhMjkgMjkgMCAxIDEgMjktMjkgMjkuMDMzIDI5LjAzMyAwIDAgMSAtMjkgMjl6bTAtNTZhMjcgMjcgMCAxIDAgMjcgMjcgMjcuMDMxIDI3LjAzMSAwIDAgMCAtMjctMjd6Ii8+PHBhdGggZD0ibTM3IDE3LjI4MWExIDEgMCAwIDEgLTEtMXYtMS43MThhMSAxIDAgMCAxIDIgMHYxLjcxOWExIDEgMCAwIDEgLTEgLjk5OXoiLz48cGF0aCBkPSJtMzcgNjAuNDM4YTEgMSAwIDAgMSAtMS0xdi0xLjcxOWExIDEgMCAwIDEgMiAwdjEuNzE5YTEgMSAwIDAgMSAtMSAxeiIvPjxwYXRoIGQ9Im01MS42NSAyMy4zNWExIDEgMCAwIDEgLS43MDctMS43MDdsMS4yMTUtMS4yMTVhMSAxIDAgMCAxIDEuNDE0IDEuNDE0bC0xLjIxNSAxLjIxNWExIDEgMCAwIDEgLS43MDcuMjkzeiIvPjxwYXRoIGQ9Im0yMS4xMzUgNTMuODY2YTEgMSAwIDAgMSAtLjcwNy0xLjcwN2wxLjIxNS0xLjIxNWExIDEgMCAwIDEgMS40MTQgMS40MTRsLTEuMjE1IDEuMjE1YTEgMSAwIDAgMSAtLjcwNy4yOTN6Ii8+PHBhdGggZD0ibTU5LjQzOCAzOGgtMS43MTlhMSAxIDAgMCAxIDAtMmgxLjcxOWExIDEgMCAwIDEgMCAyeiIvPjxwYXRoIGQ9Im0xNi4yODEgMzhoLTEuNzE4YTEgMSAwIDAgMSAwLTJoMS43MTlhMSAxIDAgMCAxIDAgMnoiLz48cGF0aCBkPSJtNTIuODY1IDUzLjg2NmExIDEgMCAwIDEgLS43MDctLjI5M2wtMS4yMTUtMS4yMTVhMSAxIDAgMCAxIDEuNDE0LTEuNDE0bDEuMjE1IDEuMjE1YTEgMSAwIDAgMSAtLjcwNyAxLjcwN3oiLz48cGF0aCBkPSJtMjIuMzUgMjMuMzVhMSAxIDAgMCAxIC0uNzA3LS4yOTNsLTEuMjE1LTEuMjE1YTEgMSAwIDAgMSAxLjQxNC0xLjQxNGwxLjIxNSAxLjIxNWExIDEgMCAwIDEgLS43MDcgMS43MDd6Ii8+PHBhdGggZD0ibTMxLjQzOCA0My41NjNhMSAxIDAgMCAxIC0uNzA3LTEuNzA3bDUuMjY5LTUuMjd2LTE0LjU4NmExIDEgMCAwIDEgMiAwdjE1YTEgMSAwIDAgMSAtLjI5My43MDdsLTUuNTYyIDUuNTYzYTEgMSAwIDAgMSAtLjcwNy4yOTN6Ii8+PC9zdmc+"
        />
        <h5
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            direction: "rtl",
            marginLeft: "1010px",
            marginTop: "3px",
            fontWeight: "bolder",
            fontSize: "18px",
            textDecoration: "underline",
          }}>
          שעות פתיחה
        </h5>
        <p
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "150px",
            direction: "rtl",
            marginLeft: "945px",
            marginTop: "30px",
            fontWeight: "bold",
          }}>
          ראשון : 23:30 - 12:00
          <br />
          שני : 23:30 - 12:00
          <br />
          שלישי : 23:30 - 12:00
          <br />
          רביעי : 23:30 - 12:00
          <br />
          חמישי : 23:30 - 12:00
          <br />
          שישי : 23:30 - 12:00
          <br />
          שבת : 23:30 - 12:00
        </p>
        <hr
          style={{
            height: "200px",
            width: "0px",
            marginLeft: "1100px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
            position: "relative",
            zIndex: -1,
          }}
        />

        <hr
          style={{
            width: "900px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
          }}
        />
        <img
          alt=""
          style={{
            height: "30px",
            width: "30px",
            marginLeft: "1120px",
            marginTop: "40px",
            position: "absolute",
            zIndex: 2,
          }}
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iT3V0bGluZSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBkPSJNMzkyLDQ4YTEwNC40NjIsMTA0LjQ2MiwwLDAsMC00Mi4yMzksOC45NDcsMTI3Ljg4NSwxMjcuODg1LDAsMCwwLTE4Ny41NzksMEExMDQuMDA2LDEwNC4wMDYsMCwxLDAsOTMuNjIxLDI1Mi42MjNMMTIwLDQwOC42NzJWNDg4YTgsOCwwLDAsMCw4LDhIMzg0YTgsOCwwLDAsMCw4LThWNDA4LjY3MmwyNi4zNzktMTU2LjA0OUExMDQuMDE0LDEwNC4wMTQsMCwwLDAsMzkyLDQ4Wk0zNzYsNDgwSDEzNlY0MTZIMzc2Wm0zMy43NzEtMjQxLjc5NGE4LDgsMCwwLDAtNi4yODEsNi41TDM3Ny4yMzksNDAwSDMyOC41OTJsNy4zODctMTAzLjQzaC0uMDA4Yy4wMTQtLjE4OS4wMjktLjM3Ny4wMjktLjU2OWE4LDgsMCwwLDAtMTUuOTcxLS41NjloLS4wMDhMMzEyLjU1MSw0MDBIMjY0VjMxMmE4LDgsMCwwLDAtMTYsMHY4OEgxOTkuNDQ5bC03LjQ3LTEwNC41N2gtLjAwOEE4LDgsMCwwLDAsMTc2LDI5NmMwLC4xOTIuMDE1LjM4LjAyOS41NjloLS4wMDhMMTgzLjQwOCw0MDBIMTM0Ljc2MUwxMDguNTEsMjQ0LjcwOWE4LDgsMCwwLDAtNi4yODEtNi41QTg4LjAwOSw4OC4wMDksMCwxLDEsMjA4LDE1MmE4LDgsMCwwLDAsMTYsMCwxMDMuOTk0LDEwMy45OTQsMCwwLDAtNDcuMjYyLTg3LjExNiwxMTIuMDE2LDExMi4wMTYsMCwwLDEsMTg3LjIzNyw0OS4yNDQsOCw4LDAsMSwwLDE1LjQyMi00LjI1NiwxMjYuOTMsMTI2LjkzLDAsMCwwLTE5LjA4LTM5Ljk5NEE4Ny4xMTUsODcuMTE1LDAsMCwxLDM5Miw2NGE4OC4wMSw4OC4wMSwwLDAsMSwxNy43NzEsMTc0LjIwNloiLz48L3N2Zz4K"
        />
        <h5
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            direction: "rtl",
            marginLeft: "1070px",
            marginTop: "3px",
            fontWeight: "bolder",
            fontSize: "18px",
            textDecoration: "underline",
          }}>
          שף
        </h5>
        <p
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "150px",
            direction: "rtl",
            marginLeft: "945px",
            marginTop: "30px",
            fontWeight: "bold",
          }}>
          אייל אייזנשטיין
        </p>
        <hr
          style={{
            height: "100px",
            width: "0px",
            marginLeft: "1100px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
            position: "relative",
            zIndex: -1,
          }}
        />

        <hr
          style={{
            width: "900px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
          }}
        />
        <img
          alt=""
          style={{
            height: "30px",
            width: "30px",
            marginLeft: "1120px",
            marginTop: "40px",
            position: "absolute",
            zIndex: 2,
          }}
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yODEuNTQxLDEyNC4yM2gtOTEuNTR2MjYzLjU0aDMwdi04My41NDFoNjEuNTRjNDguNzc3LDAsODguNDYtMzkuNjgzLDg4LjQ2LTg4LjQ1OXYtMy4wODINCgkJCUMzNzAuMDAxLDE2My45MTMsMzMwLjMxOCwxMjQuMjMsMjgxLjU0MSwxMjQuMjN6IE0zNDAuMDAxLDIxNS43NzFjMCwzMi4yMzQtMjYuMjI1LDU4LjQ1OS01OC40Niw1OC40NTloLTYxLjU0di0xMjBoNjEuNTQNCgkJCWMzMi4yMzUsMCw1OC40NiwyNi4yMjUsNTguNDYsNTguNDU5VjIxNS43NzF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzcuMDIsNzQuOThDMzg4LjY2NywyNi42MjgsMzI0LjM4LDAsMjU2LDBTMTIzLjMzMywyNi42MjgsNzQuOTgsNzQuOThDMjYuNjI5LDEyMy4zMzMsMCwxODcuNjIxLDAsMjU2DQoJCQlzMjYuNjI5LDEzMi42NjcsNzQuOTgxLDE4MS4wMTlTMTg3LjYyLDUxMiwyNTYsNTEyczEzMi42NjctMjYuNjI4LDE4MS4wMi03NC45OEM0ODUuMzcxLDM4OC42NjcsNTEyLDMyNC4zNzksNTEyLDI1Ng0KCQkJUzQ4NS4zNzEsMTIzLjMzMyw0MzcuMDIsNzQuOTh6IE00MTUuODA3LDQxNS44MDdDMzczLjEyLDQ1OC40OTIsMzE2LjM2Niw0ODIsMjU2LDQ4MmMtNjAuMzY3LDAtMTE3LjEyLTIzLjUwOC0xNTkuODA2LTY2LjE5NA0KCQkJQzUzLjUwOCwzNzMuMTIsMzAsMzE2LjM2NiwzMCwyNTZjMC02MC4zNjYsMjMuNTA4LTExNy4xMiw2Ni4xOTQtMTU5LjgwN0MxMzguODgsNTMuNTA4LDE5NS42MzMsMzAsMjU2LDMwDQoJCQljNjAuMzY2LDAsMTE3LjEyLDIzLjUwOCwxNTkuODA3LDY2LjE5M0M0NTguNDkyLDEzOC44OCw0ODIsMTk1LjYzNCw0ODIsMjU2QzQ4MiwzMTYuMzY2LDQ1OC40OTIsMzczLjEyLDQxNS44MDcsNDE1LjgwN3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <h5
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            direction: "rtl",
            marginLeft: "1065px",
            marginTop: "3px",
            fontWeight: "bolder",
            fontSize: "18px",
            textDecoration: "underline",
          }}>
          חניה
        </h5>
        <p
          className="regular"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "830px",
            direction: "rtl",
            marginLeft: "265px",
            marginTop: "30px",
            fontWeight: "bold",
          }}>
          חניה חינם לאורחי המסעדה, בשעות הערב בלבד ובשבת בצהריים בחניון בנין
          הקריה – הכניסה מרחוב בני אפרים 218
        </p>

        <hr
          style={{
            height: "100px",
            width: "0px",
            marginLeft: "1100px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
            position: "relative",
            zIndex: -1,
          }}
        />

        <hr
          style={{
            width: "900px",
            borderColor: "rgba(0,0,0,0.10196078431372549)",
          }}
        />
      </div>
    );
  }
}
export default Info;
