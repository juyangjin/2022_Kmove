# 서브트리를 이용하여 부모-자식 repository 만들기  

## 준비물
  1. [git](https://git-scm.com/) - 물론 github desktop과 windows cmd로도 가능하다. 그러나 리눅스 터미널이 편하면 git을 설치하는 것이 좋다.
  2. [github desktop](https://desktop.github.com/) - 필자는 bash를 썼기 때문에 딱히 필요는 없었으나, 폴더 연동 확인을 위해 까는 것이 편하다.
  3. 부모로 사용할 repository - 자동생성되는 md 파일은 생성해두는 걸 추천, 필자는 2022_Kmove를 생성했다.
  4. 자식으로 사용할 repository - 필자는 기존에 있던 Spring, Python 2개를 이용했지만 갯수는 크게 상관없다.

  ## 순서
   1. github에 접속해서, 또는 github desktop에서 repository의 경로를 복사한다.
   2. git bash를 실행하여 cd 명령어로 내 컴퓨터 안에 부모 repository가 복사 또는 생성될 경로까지 이동한다.
   3. `cd <하위에 있는 이동경로>` 이런식으로 이동 가능하다. 하위 폴더를 모르면 dir 입력해보기
   4. `git init` 해당폴더 아래에 .git 이라는 파일이 생성된다.(지우면 안된다.)
   5. `git clon <부모repository경로>` 경로 아래에 부모 repository가 복사됨
   6. `cd <부모폴더>` 부모폴더 안쪽으로 실행 경로를 바꾼다 경로변경을 안 한다면 부모 폴더도 7번에서 remote를 생성해야한다.
   7. `git remote add <자식remote이름> <자식repository의 url>` 생성된 remote이름은 부모,자식1,자식2 모두 다 다르게 지정되어야 한다.
   9.  6번의 과정을 추가할 폴더만큼 반복하고 `git remote -v`를 입력하여 생성된 remote를 확인할 수 있다. 부모, 자식이 모두 보이면 성공이다.
   10. `git subtree add --prefix=<자식폴더이름> <자식remote이름> <부모폴더 브런치(master또는main)>`   
       터미널 상에서 오른쪽에 ()로 하늘색 main, 또는 master가 적혀있으니 그걸 참고하길 바란다. 그래도 모르겠으면 차라리 모든 폴더의 최상위 
       브런치를 같은이름으로 통합하길 바란다. 필자는 master로 통합하였다.
   11. 10번의 과정을 추가하고 싶은 서브트리(자식폴더)만큼 반복한다.
   12. `git push`로 업로드한다.

 + 이건 windows 환경 기준 설명이고, Mac OS의 경우 일반 터미널로 설치가 가능할 것으로 보인다.
 + 사실 이건 서브트리를 이용한 것이고 브랜치로 나누어서 repository를 연결할 수도 있다고 한다. 필자는 실패해서 아쉬우나 다음에 재도전해 볼 생각이 있다.
