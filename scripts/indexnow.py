#!/usr/bin/env python3
"""Submit URLs to IndexNow (Bing/Yandex/Seznam/Naver).

Usage:
  python3 scripts/indexnow.py                 # submit all site URLs
  python3 scripts/indexnow.py /tips/ /shells/ # submit specific paths
"""
import json
import sys
import urllib.request

HOST = "mortalshell2.online"
KEY = "076b3950bfdb4567bcd4d7b3d566f825"
ENDPOINT = "https://api.indexnow.org/indexnow"

ALL_PATHS = [
    "/",
    "/beginner-guide/",
    "/best-build/",
    "/walkthrough/",
    "/shells/",
    "/weapons/",
    "/bosses/",
    "/tips/",
    "/performance-fix/",
    "/damage-calculator/",
    "/best-proxima-build/",
    "/best-smert-build/",
    "/about/",
    "/privacy/",
    "/terms/",
]


def main() -> None:
    paths = sys.argv[1:] or ALL_PATHS
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": f"https://{HOST}/{KEY}.txt",
        "urlList": [f"https://{HOST}{p}" for p in paths],
    }
    req = urllib.request.Request(
        ENDPOINT,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            print(f"HTTP {resp.status}")
            body = resp.read().decode(errors="replace").strip()
            if body:
                print(body)
    except urllib.error.HTTPError as e:
        print(f"HTTP {e.code}")
        print(e.read().decode(errors="replace").strip()[:300])
    print(f"submitted {len(paths)} URLs: {paths}")


if __name__ == "__main__":
    main()
