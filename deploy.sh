#!/bin/bash
set -e

curl -sL -o makeless https://github.com/makeless/makeless/releases/download/v1.0.0/makeless-linux && \
    chmod +x makeless && \
    TOKEN="$MAKELESS_TOKEN" ./makeless