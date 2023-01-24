# Performance test results

Brief description of the used server (choose one): HTTP/1.1

Brief description of your computer:
     OS:       Linux Mint 20.3 Cinnamon
     CPU:      Intel© Core™ i7-4790K CPU @ 4.00GHz × 4
     Memory:   16GB

## No Redis Cache

### Retrieving todos

http_reqs: 40086  4008.039954/s
http_req_duration - median: 2.43ms
http_req_duration - 99th percentile: 9.19ms

## Redis Cache

### Retrieving todos

http_reqs: 50865  5085.761168/s
http_req_duration - median: 1.9ms
http_req_duration - 99th percentile: 9.21ms

## Reflection

The test results indicate that with redis caching there were ~27% more requests carried out in the 10 seconds and average request duration went down ~22%.