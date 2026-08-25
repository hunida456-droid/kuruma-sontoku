# クルマ損得計算 MVP

정적 HTML/CSS/JS 사이트라 Node 설치 없이 바로 실행할 수 있습니다.

## 로컬 실행
프로젝트 폴더에서:

```bash
python -m http.server 8080
```

브라우저에서 http://localhost:8080 접속.

## Cloudflare Pages 무료 배포
이 프로젝트는 빌드가 필요 없는 정적 HTML/CSS/JS 사이트입니다. Cloudflare Pages의 Direct Upload에서 `kuruma-sontoku`를 프로젝트명으로 만들면 `https://kuruma-sontoku.pages.dev` 주소를 사용할 수 있습니다. 프로젝트명이 이미 사용 중이면 Cloudflare가 다른 `pages.dev` 주소를 발급할 수 있습니다.

대시보드에서 업로드할 때는 `work/kuruma-sontoku` 폴더 안의 파일 전체를 업로드하고, 빌드 명령은 비워 둡니다. Git 연동 없이도 배포할 수 있으며, `_headers`, `404.html`, `robots.txt`, `sitemap.xml`은 정적 공개 파일로 함께 배포됩니다.

Wrangler를 사용할 경우 루트의 `wrangler.toml`이 프로젝트명과 출력 디렉터리(`.`)를 지정합니다. 이번 안내는 별도 설치가 필요 없는 대시보드 드래그 앤 드롭 방식을 기준으로 합니다.

## SEO 공개 준비
- 임시 사이트명은 `クルマ損得計算`으로 두었습니다. 확정 후 HTML의 브랜드·title·구조화 데이터 이름을 함께 교체하세요.
- 무료 Pages 주소 기준은 `https://kuruma-sontoku.pages.dev`입니다. Cloudflare가 다른 `pages.dev` 주소를 발급하면 HTML의 canonical·구조화 데이터 URL, `sitemap.xml`, `robots.txt`에서 기존 주소를 새 주소로 한 번에 치환하면 됩니다.
- 계산기 고유 URL은 `/tools/fuel.html`, `/tools/ownership.html`, `/tools/gas-hv.html`, `/tools/hv-ev.html`, `/tools/replace.html`입니다.
- 각 계산기 페이지에는 고유 title, meta description, H1, FAQ 본문과 FAQPage JSON-LD가 포함되어 있습니다.

## 공개 전에 확인
- Cloudflare가 발급한 실제 `pages.dev` 주소가 canonical·sitemap·robots에 반영되었는지 확인
- privacy.html 내용을 실제 사용 서비스에 맞게 수정
- 운영자/문의 방법 추가
- Google Analytics/Search Console 연결
- AdSense 승인 후 광고 코드 삽입
