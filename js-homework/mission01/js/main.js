const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

function login() {
  let InputId = document.querySelector("#userEmail");
  if (!emailReg(InputId.value)) {
    InputId.classList.add("is--invalid");
  }
  let InputPw = document.querySelector("#userPassword");
  if (!emailReg(InputPw.value)) {
    InputPw.classList.add("is--invalid");
  }

  if (InputId.value === user.id && InputPw.value === user.pw) {
    window.location.href = "welcome.html";
    InputId.classList.remove("is--invalid");
    InputPw.classList.remove("is--invalid");
  }
}

/*

1. email 정규표현식을 사용한 validation
 //   - false면 해당 input에 is--invalid 추가
			node.classList.remove('is--invalid')
//  - true면 해당 input에 is--invalid 제거
			node.classList.add('is--invalid')
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
