# Directory Structure

Server organizes your services in a clean and modern way:

```text
~/makeless
├── deployments
│   ├── httpd-service
│   │   │── 1575901430.zip
│   ├── mysql-service
│       │── 1575901980.zip
│       │── 1575905374.zip
│
├── builds
│   ├── httpd-service
│   │   │── 1575901430
│   ├── mysql-service
│       │── 1575901980
|       │── 1575905374
│ 
├── containers
│   ├── httpd-service
│   │   │── latest
│   ├── mysql-service
│       │── database
│       │── latest
```

## The Makeless Directory 

The `makeless` directory contains the core data of your server. All of your services will be in this directory.

### The Deployments Directory

The `deployments` directory contains the zipped files from your `makeless client` - organized by unix timestamps.

### The Builds Directory

The `builds` directory contains the unzipped files of your deployments - organized by unix timestamps. 

### The Containers Directory

The `containers` directory contains your volumes and symlinks to your latest service builds.
