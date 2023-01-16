## Todo API
### Reuslts of performance-test-add-todo.js
              /\      |‾‾| /‾‾/   /‾‾/   
         /\  /  \     |  |/  /   /  /    
        /  \/    \    |     (   /   ‾‾\  
       /          \   |  |\  \ |  (‾)  | 
      / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: performance-test-add-todo.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
           * default: 10 looping VUs for 10s (gracefulStop: 30s)


running (10.0s), 00/10 VUs, 232660 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  10s

     data_received..................: 27 MB  2.7 MB/s
     data_sent......................: 29 MB  2.9 MB/s
     http_req_blocked...............: avg=1.66µs   p(99)=3.54µs 
     http_req_connecting............: avg=121ns    p(99)=0s     
     http_req_duration..............: avg=385.48µs p(99)=1.49ms 
       { expected_response:true }...: avg=385.48µs p(99)=1.49ms 
     http_req_failed................: 0.00%  ✓ 0            ✗ 232660
     http_req_receiving.............: avg=17.07µs  p(99)=44.37µs
     http_req_sending...............: avg=8.33µs   p(99)=17.48µs
     http_req_tls_handshaking.......: avg=0s       p(99)=0s     
     http_req_waiting...............: avg=360.07µs p(99)=1.45ms 
     http_reqs......................: 232660 23252.089291/s
     iteration_duration.............: avg=425.57µs p(99)=1.54ms 
     iterations.....................: 232660 23252.089291/s
     vus............................: 10     min=10         max=10  
     vus_max........................: 10     min=10         max=10  

## Reuslts of performance-test-get-todo.js
              /\      |‾‾| /‾‾/   /‾‾/   
         /\  /  \     |  |/  /   /  /    
        /  \/    \    |     (   /   ‾‾\  
       /          \   |  |\  \ |  (‾)  | 
      / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: performance-test-get-todos.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 35s max duration (incl. graceful stop):
           * default: 10 looping VUs for 5s (gracefulStop: 30s)


running (05.4s), 00/10 VUs, 119 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  5s

     data_received..................: 498 MB 92 MB/s
     data_sent......................: 10 kB  1.9 kB/s
     http_req_blocked...............: avg=24.79µs  p(99)=351.22µs
     http_req_connecting............: avg=13.05µs  p(99)=307.93µs
     http_req_duration..............: avg=445.38ms p(99)=498.07ms
       { expected_response:true }...: avg=445.38ms p(99)=498.07ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 119 
     http_req_receiving.............: avg=1.8ms    p(99)=7.12ms  
     http_req_sending...............: avg=43.13µs  p(99)=65.33µs 
     http_req_tls_handshaking.......: avg=0s       p(99)=0s      
     http_req_waiting...............: avg=443.54ms p(99)=495.99ms
     http_reqs......................: 119    22.071662/s
     iteration_duration.............: avg=445.5ms  p(99)=498.17ms
     iterations.....................: 119    22.071662/s
     vus............................: 10     min=10      max=10
     vus_max........................: 10     min=10      max=10
## Todo JSON API
### Reuslts of performance-test-add-todo.js



             /\      |‾‾| /‾‾/   /‾‾/   
        /\  /  \     |  |/  /   /  /    
       /  \/    \    |     (   /   ‾‾\  
      /          \   |  |\  \ |  (‾)  | 
     / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: performance-test-add-todo.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
           * default: 10 looping VUs for 10s (gracefulStop: 30s)


running (10.0s), 00/10 VUs, 25870 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  10s

     data_received..................: 3.0 MB 303 kB/s
     data_sent......................: 3.2 MB 318 kB/s
     http_req_blocked...............: avg=2.52µs  p(99)=5.53µs 
     http_req_connecting............: avg=75ns    p(99)=0s     
     http_req_duration..............: avg=3.79ms  p(99)=8.78ms 
       { expected_response:true }...: avg=3.79ms  p(99)=8.78ms 
     http_req_failed................: 0.00%  ✓ 0           ✗ 25870
     http_req_receiving.............: avg=30.26µs p(99)=75.92µs
     http_req_sending...............: avg=13.08µs p(99)=29µs   
     http_req_tls_handshaking.......: avg=0s      p(99)=0s     
     http_req_waiting...............: avg=3.75ms  p(99)=8.72ms 
     http_reqs......................: 25870  2586.192907/s
     iteration_duration.............: avg=3.85ms  p(99)=8.86ms 
     iterations.....................: 25870  2586.192907/s
     vus............................: 10     min=10        max=10 
     vus_max........................: 10     min=10        max=10 

## Reuslts of performance-test-get-todo.js

              /\      |‾‾| /‾‾/   /‾‾/   
         /\  /  \     |  |/  /   /  /    
        /  \/    \    |     (   /   ‾‾\  
       /          \   |  |\  \ |  (‾)  | 
      / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: performance-test-get-todos.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 35s max duration (incl. graceful stop):
           * default: 10 looping VUs for 5s (gracefulStop: 30s)


running (05.3s), 00/10 VUs, 95 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  5s

     data_received..................: 70 MB  13 MB/s
     data_sent......................: 8.1 kB 1.5 kB/s
     http_req_blocked...............: avg=31.86µs  p(99)=340.44µs
     http_req_connecting............: avg=19.47µs  p(99)=284.96µs
     http_req_duration..............: avg=544.47ms p(99)=641.74ms
       { expected_response:true }...: avg=544.47ms p(99)=641.74ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 95  
     http_req_receiving.............: avg=511.19µs p(99)=4.03ms  
     http_req_sending...............: avg=18.11µs  p(99)=99.76µs 
     http_req_tls_handshaking.......: avg=0s       p(99)=0s      
     http_req_waiting...............: avg=543.94ms p(99)=638.99ms
     http_reqs......................: 95     18.092447/s
     iteration_duration.............: avg=544.59ms p(99)=642.38ms
     iterations.....................: 95     18.092447/s
     vus............................: 10     min=10      max=10
     vus_max........................: 10     min=10      max=10

## Reflection

Todo JSON API has a bit longer http_req_duration

     Add
     Todo JSON API: avg=385.48µs p(99)=1.49ms
     Todo API: avg=3.79ms  p(99)=8.78ms
     
     Get
     Todo JSON API: avg=544.47ms p(99)=641.74ms
     Todo API: avg=445.38ms p(99)=498.07ms

Thus Todo JSON API has slower request output.
This is because the DB brings a bit of overhead to the requets.

     System info
     OS:       Linux Mint 20.3 Cinnamon
     CPU:      Intel© Core™ i7-4790K CPU @ 4.00GHz × 4
     Memory:   16GB