@echo off
cd /d C:\Projects\mim-college
:loop
.\nextsrv.exe node_modules\next\dist\bin\next start >> server.log 2>&1
timeout /t 2 /nobreak >nul
goto loop
