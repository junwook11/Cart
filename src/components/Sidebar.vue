<template>
    <div>
      <b-button v-b-toggle.sidebar-1>Open Recipe</b-button>
      <b-sidebar id="sidebar-1" title="Recipe" shadow>
        <div class="px-5 py-5">
          <p>
            1. 닭을 손질한다.<br>
            2. 닭을 손질하는 건 귀찮은 일이다.<br>
            3. 치킨은 사서 드세요 아ㅋㅋ
          </p>
          <img src="@/assets/baek.jpg" alt="" width="250px" height="300px">
        </div>
      </b-sidebar>
    </div>
  </template>