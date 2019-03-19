<h2>Install the project<h2>
1: Clone/download the project and cd to to the project directory <br>
2: install the packages using "npm install"<br>
3: Go to "/server/datasources.json" and update the "AuthHeader" credentials<br>
4: start the server using "node ."<br>
5: Open the API explorer using http://localhost:3010/explorer/<br>

<h2>Test calculator web service</h2>
1: Click "soap_CalculatorSoap" and then click "/CalculatorSoap/Add"<br>
2: put json "{"intA": 4, "intB": "6"}" in data and click "Try It Out!" button, you will see the output in "Response Body" as the sum of two numbers.( This represents data is successfully posted and received the response)<br>

<h2>Test eRx web service</h2>
1: Click "soap_eRxNowRegSrvSoap" and then click "/eRxNowRegSrvSoap/HelloFriend"<br>
2: put json "{}" in data (HelloFriend is not expecting any data) and click "Try It Out!" button, you will see Unauthorized error in "Response Body".<br>




