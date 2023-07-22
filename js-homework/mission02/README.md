# poster

썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.

## 구현

- [x] 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
- [x] 이미지와 색상의 데이터는 `data.js` 에서 불러와주세요.
- [x] 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
- [x] 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
- [ ] 함수를 분리시켜주세요.

## 코드 설명

- li 클릭시, 배경 색상과 메인 비주얼 이미지 변경

배경색 변경 코드

```
document.body.style.background = `linear-gradient(to bottom,${data[index - 1].color[0]},${data[index - 1].color[1]})`;
```

이미지 변경 코드

```
attr(visualImage, "src", `./assets/${data[index - 1].name}.jpeg`);
attr(visualImage, "alt", `${data[index - 1].alt}`);
```

- 비주얼 이름 변경 코드

```
nickName.textContent = `${data[index - 1].name}`;
```

```
nav.addEventListener("click", handleSlider);
```

### 실행화면

![이미지](assets/image01.png)
