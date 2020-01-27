#!/bin/bash
set -e

curl -sL -o makeless https://github.com/makeless/makeless/releases/download/v0.4.0/makeless-darwin && \
    chmod +x makeless && \
    TOKEN="$MAKELESS_TOKEN" ./makeless