<h2>Install the project<h2>
1: cd to to the project directory <br>
2: install the packages using "npm install"<br>
3: Go to "/server/datasources.json" and update the "AuthHeader" credentials<br>
4: start the server using "node ."<br>
5: Open the API explorer using http://localhost:3010/explorer/<br>

<h2>Test calculator web service</h2>
1: Open "/CalculatorSoap/Add" API under "soap_CalculatorSoap"<br>
2: put json "{"intA": 4, "intB": "6"}" in data and click "Try It Out!" button, you will see the output (successfully posted data and received the response)<br>

<h2>Test eRx web service</h2>
1: Open "/eRxNowRegSrvSoap/HelloFriend" API under "soap_eRxNowRegSrvSoap"<br>
2: put json "{}" in data (HelloFriend is not expecting any data) and click "Try It Out!" button, you will see Unauthorized error.<br>




