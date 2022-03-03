Node Practices

1. Package
  - 완전한 application(nodemon, babel, webpack)
  - Modules used in projects (Library)


2. Dependency
  - 개발하는 프로젝트(Application, Package)에서 설치하고 사용하는 패키지 
  - 2-1) 일반 의존성
    - 개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 포함이 되어야함 
    - ex) $[project-ex01] npm i ... --> react, ejs, XIAOS는 이거로 설치 

  - 2-2) 개발 의존성
    - 개발에 필요하거나 도움이 되는 패키지(dev tools)로 배포에 포함되지 않음 
    - ex) $[project-ex01] npm i -D ... --> 완전한 application 애들이 이거로 설치 


3. Package Install (외부 Library)
  - 3-1) 전역(global) 설치(npm이 설치된 곳에 설치): 여러 프로젝트에서 공통으로 사용하는 도구 
  - 3-2) 지역(local) 설치 : 특정 프로젝트에 종속적인 도구나 라이브러리 
  - 3-3) package 설치 
    - $[project-ex01] npm i ejs (local, general dependency)
    - $[project-ex01] npm i ejs -D nodemon (local, developement dependency)
    - $[project-ex01] npm i -g gulp (global)
    - $[project-ex01] npx gulp --version(설치 확인)

  - 3-4) 패키지 삭제
    - $[project-ex01] npm un ejs (local install 삭제)
    - $[project-ex01] npm un -g gulp (global install 삭제)
    

4. Node Project(Client:FE / Server:BE Application, Package) 생성 
  - 4-1) 프로젝트 생성(mkdir)  
  - 4-2) 프로젝트 이동(cd)
  - 4-3) 프로젝트 초기화 : 프로젝트 manifest file(package.json) 생성  
    - $[project-ex02] npm init 만 하면 계속 물어보므로 npm init -y 사용 


#### 5. Module
  - 5-1) 코어 모듈(fs, os, ... node에서 제공해주는 모듈)
  - 5-2) 파일 모듈 : 파일 경로로 불러와서 모듈 안의 함수, 객체를 사용한다.
  - 5-3) npm 모듈 : npm을 통해서 node_module에 설치하고 사용하는 모듈
      - 원격 배포 
      - 로컬 배포
      


#### 6. npmjs.com(npm registry)에 내 패키지 배포(생략, https://github.com/kickscar/javascript-practices/blob/main/TechNotes/javascript-practices/11.Development%20Environments/02.%20npm.md 보고 스스로)

#### 7. helloweb-ex01 (맨바닥)

#### 8. helloweb-ex02 (express)
