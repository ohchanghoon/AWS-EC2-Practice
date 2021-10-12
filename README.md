## ✅ AWS EC2 인스턴스 생성
<br>
1. AWS 접속 - EC2 선택
    ![1](https://user-images.githubusercontent.com/58061847/136897558-b8231e14-93c0-4b12-8b28-95dae10bf799.png)
<br>
2. 인스턴스 시작 - ubuntu 프리티어선택
    ![2](https://user-images.githubusercontent.com/58061847/136897588-a5fe62ef-c272-463a-9cc0-1c1b9ef8c9b8.png)
<br>
1. 인스턴스 유형 선택
    필요로하는 CPU와 RAM크기에 맞춰 상품을 선택한다
    ![3](https://user-images.githubusercontent.com/58061847/136897609-31b41e8d-1349-41d1-aa30-55ac14b36624.png)


## ✅ AWS EC2 인스턴스 생성

Launch를 클릭하면 바로 인스턴스 리스트 페이지로 바로 이동하지는 않고 터미널로 인스턴스에 접속할 수 있는 pem 키를 생성하셔야 합니다. [새 키 페어 생성]
pem 키를 생성하고 다운로드 할 수 있는 팝업창이 뜨면 Create a new key pair를 고르시고 pem 키 파일 이름을 쓰신 후, 다운로드 받으시면 됩니다.
![4](https://user-images.githubusercontent.com/58061847/136897621-1d4fc5ee-2ece-4a63-bd9e-7da6dd117a72.png)


pem키는 절대적으로 보안에 신경을 써야하는 키이기 때문에 깃허브에 올리거나 공개된 자료로 취급하면 안되고, 보안설정을 변경해주어야합니다.

다운받아진 pem키를 자신만의 폴더로 이동시킨 후, 

파일 우클릭 - 보안 - 고급탭 이동

1. 상속사용하지않기
2. User가 들어있는 이름은 전부 제거

이후에 명령프롬프트를 관리자 권한으로 실행시키고, key가 있는 폴더로 이동합니다. 

[AWS 인스턴스 - 연결 버튼]을 클릭해서 퍼블릭 DNS를 사용하여 인스턴스에 연결의

[예]를 복사해서 명령프롬프트에 붙여넣기합니다.

 ![5](https://user-images.githubusercontent.com/58061847/136897636-8b9456da-3c64-469b-a8e1-e68a69c97e20.png)
![6](https://user-images.githubusercontent.com/58061847/136897639-789a0983-5ab2-4ea3-8f16-7299c2eea3d9.png)

위처럼 대여한 상품의 기본적인 정보가 보여지게되고, 접속이 성공된 모습입니다.

## ✅ 생성된 AWS EC2 인스턴스에 서버 배포하기
![7](https://user-images.githubusercontent.com/58061847/136897659-88e33ded-0cd2-436e-a623-81e94c2d07be.png)

간단한 express 서버를 띄우는 코드를 작성하고, 깃허브에 업로드를 하였습니다.

그리고 위 코드를 대여한 EC2서버에 배포하도록 하겠습니다.

인스턴스에는 git은 기본적으로 설치되어있지만, npm, express, node는 없습니다.

```jsx
sudo apt update
sudo apt install nodejs
sudo apt install npm
sudo npm install -g express
sudo npm install -g express-generator
```

설치를 끝내고 적절한 위치로 이동해서 node index.js를 넣으면  사이트에 연결할 수 없다고 뜹니다.

따라서 AWS페이지 자체에서 한가지 보안설정을 추가로 진행 해주어야합니다.

인스턴스에서 어떤 포트를 개방할 지 설정을 추가해줍니다.
![8](https://user-images.githubusercontent.com/58061847/136897751-062f23f5-3848-4b81-9ac0-61ff90427a51.png)

다시 명령프롬프트로 돌아와서 node index.js를 넣고, 인스턴스의 ip로 접근을 실행합니다.

amazonaws.com/secure.notion-static.com/8942b046-7dc1-481d-86f2-955fa3957c1b/Untitled.png)

정상 작동입니다.

---
##  ✅ pm2 

node index.js로 서버를 실행 시켰는데 터미널에서 인스턴스를 나올려면 서버를 꺼주어야합니다.

그렇다고 계속 터미널을 실행 시킬 수도 없기에, 이를 문제를 해결해주는 프로그램이 있습니다

```jsx
npm install -g pm2
pm2 start index.js
```


status가 online이라면 ubuntu 터미널을 닫아도 서버는 계속 실행되게됩니다.
![asdf](https://user-images.githubusercontent.com/58061847/136897815-8092db64-b3c2-432e-9e5d-51ce76c0d6bb.png)

