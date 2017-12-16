<style lang="scss">
.m-login {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: $bg;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 400px;
    .title {
      color: $light_gray;
      text-align: center;
      font-size: $fs_large;
    }
    .operate-btn {
      width: 100%;
    }
    .change-area {
      .el-form-item__content {
        display: flex !important;
      }
      .notice {
        color: $light_gray;
        font-size: $fs_medium;
      }
      .change-type-btn {
        flex-grow: 1;
      }
    }
  }
  > canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
}
</style>

<template>
<div class="m-login">
  <el-form class="login-form">
    <h3 class="title">welcome to summary</h3>
    <template v-if="type">
      <el-form-item>
        <el-input v-model="loginInfo.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginInfo.password" placeholder="密码"></el-input>
      </el-form-item>
    </template>

    <template v-else>
      <el-form-item>
        <el-input v-model="registInfo.username" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="registInfo.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="registInfo.repassword" placeholder="再次确认密码"></el-input>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="operate" class="operate-btn">
        <template v-if="type">
          登 录
        </template>
        <template v-else>
          注 册
        </template>
      </el-button>
    </el-form-item>
    <el-form-item class="change-area">
      <span class="notice">
        <template v-if="type">
          新用户注册，请点击
        </template>
        <template v-else>
          使用已有账号登录，请点击
        </template>
        <i class="el-icon-arrow-right"></i></span>
      <el-button type="primary" @click="changeOperate" class="change-type-btn">
        <template v-if="type">注 册</template>
        <template v-else>登 录</template>
      </el-button>
    </el-form-item>
  </el-form>

  <canvas width="100%" height="100%"></canvas>
  <!-- <canvas width="100%" height="100%" id="canvas"></canvas> -->
</div>
</template>

<script>
import AuthApi from "api/auth";
export default {
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      },
      registInfo: {
        username: "",
        password: "",
        repassword: ""
      },
      type: true
    };
  },
  methods: {
    operate() {
      if (this.type) {
        let username = this.loginInfo.username;
        let password = this.loginInfo.password;
        AuthApi.login(username, password).then(res => {
          if (typeof res !== "number") {
            this.$router.push({ path: "/" });
          }
        });
      } else {
        let username = this.registInfo.username;
        let password = this.registInfo.password;
        let repassword = this.registInfo.repassword;
        AuthApi.regist(username, password, repassword).then(res => {
          if (typeof res !== "number") {
            alert("注册成功");
          }
        });
      }
    },
    changeOperate() {
      this.type = !this.type;
    }
  },
  mounted() {
    var login = document.getElementsByClassName("m-login")[0];
    login.addEventListener("touchmove", function(e) {
      e.preventDefault();
    });
    var c = document.getElementsByTagName("canvas")[0],
      x = c.getContext("2d"),
      pr = window.devicePixelRatio || 1,
      w = window.innerWidth,
      h = window.innerHeight,
      f = 90,
      q,
      m = Math,
      r = 0,
      u = m.PI * 2,
      v = m.cos,
      z = m.random;
    c.width = w * pr;
    c.height = h * pr;
    x.scale(pr, pr);
    x.globalAlpha = 0.6;
    function i() {
      x.clearRect(0, 0, w, h);
      q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }];
      while (q[1].x < w + f) d(q[0], q[1]);
    }
    function d(i, j) {
      x.beginPath();
      x.moveTo(i.x, i.y);
      x.lineTo(j.x, j.y);
      var k = j.x + (z() * 2 - 0.25) * f,
        n = y(j.y);
      x.lineTo(k, n);
      x.closePath();
      r -= u / -50;
      x.fillStyle =
        "#" +
        (((v(r) * 127 + 128) << 16) |
          ((v(r + u / 3) * 127 + 128) << 8) |
          (v(r + u / 3 * 2) * 127 + 128)
        ).toString(16);
      x.fill();
      q[0] = q[1];
      q[1] = { x: k, y: n };
    }
    function y(p) {
      var t = p + (z() * 2 - 1.1) * f;
      return t > h || t < 0 ? y(p) : t;
    }
    document.onclick = i;
    document.ontouchstart = i;
    i();
  }
  // ,
  // mounted() {
  //   this.drawBackgound = new drawBackgound();
  // }
};
// canvas绘制动态背景
function drawBackgound() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineWidth = 0.3;
  ctx.strokeStyle = new Color(150).style;
  var mousePosition = {
    x: 30 * canvas.width / 100,
    y: 30 * canvas.height / 100
  };
  var dots = {
    nb: 750,
    distance: 50,
    d_radius: 100,
    array: []
  };
  function colorValue(min) {
    return Math.floor(Math.random() * 255 + min);
  }

  function createColorStyle(r, g, b) {
    return "rgba(" + r + "," + g + "," + b + ", 0.8)";
  }

  function mixComponents(comp1, weight1, comp2, weight2) {
    return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
  }

  function averageColorStyles(dot1, dot2) {
    var color1 = dot1.color,
      color2 = dot2.color;

    var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
      g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
      b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
    return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
  }

  function Color(min) {
    min = min || 0;
    this.r = colorValue(min);
    this.g = colorValue(min);
    this.b = colorValue(min);
    this.style = createColorStyle(this.r, this.g, this.b);
  }
  function Dot() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();
    this.radius = Math.random() * 2;
    this.color = new Color();
  }
  Dot.prototype = {
    draw: function() {
      ctx.beginPath();
      ctx.fillStyle = this.color.style;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    }
  };
  function createDots() {
    for (var i = 0; i < dots.nb; i++) {
      dots.array.push(new Dot());
    }
  }
  function moveDots() {
    for (var i = 0; i < dots.nb; i++) {
      var dot = dots.array[i];
      if (dot.y < 0 || dot.y > canvas.height) {
        dot.vx = dot.vx;
        dot.vy = -dot.vy;
      } else if (dot.x < 0 || dot.x > canvas.width) {
        dot.vx = -dot.vx;
        dot.vy = dot.vy;
      }
      dot.x += dot.vx;
      dot.y += dot.vy;
    }
  }
  function connectDots() {
    for (var i = 0; i < dots.nb; i++) {
      for (var j = 0; j < dots.nb; j++) {
        var i_dot = dots.array[i];
        var j_dot = dots.array[j];
        if (
          i_dot.x - j_dot.x < dots.distance &&
          i_dot.y - j_dot.y < dots.distance &&
          i_dot.x - j_dot.x > -dots.distance &&
          i_dot.y - j_dot.y > -dots.distance
        ) {
          if (
            i_dot.x - mousePosition.x < dots.d_radius &&
            i_dot.y - mousePosition.y < dots.d_radius &&
            i_dot.x - mousePosition.x > -dots.d_radius &&
            i_dot.y - mousePosition.y > -dots.d_radius
          ) {
            ctx.beginPath();
            ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
  }
  function drawDots() {
    for (var i = 0; i < dots.nb; i++) {
      var dot = dots.array[i];
      dot.draw();
    }
  }
  function animateDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveDots();
    connectDots();
    drawDots();
    requestAnimationFrame(animateDots);
  }
  document.getElementById("canvas").onmousemove = function(e) {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
  };
  document.getElementById("canvas").onmouseleave = function(e) {
    mousePosition.x = canvas.width / 2;
    mousePosition.y = canvas.height / 2;
  };
  createDots();
  requestAnimationFrame(animateDots);
}
</script>
