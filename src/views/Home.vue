<template>
  <el-row>
    <el-col :span="8" style="padding-right: 10px">
      <el-card class="box-card" shadow="hover">
        <div class="user">
          <img src="../assets/images/user.jpg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登陆时间<span>2023-6-16</span></p>
          <p>上次登录地点<span>杭州</span></p>
        </div>
      </el-card>

      <el-card style="margin-top: 20px; height: 460px" shadow="hover">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :prop="key"
            :label="val"
          />
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16" style="padding-left: 10px">
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="price">￥{{ item.value }}</p>
            <p class="desc">{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <el-card shadow="hover" style="height: 280px">
        <!-- 折线图 -->
        <div ref="echarts1" style="height:280px"></div>
      </el-card>

      <div class="graph">
        <el-card shadow="hover" style="height: 260px"></el-card>
        <el-card shadow="hover" style="height: 260px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../api";
import * as echarts from "echarts";
export default {
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData } = data.data;
      console.log(data.data);
      this.tableData = tableData;

      const echarts1 = echarts.init(this.$refs.echarts1);

      let echarts1Option = {};

      const { orderData } = data.data;
      const xAxis = Object.keys(orderData.data[0]);

      const xAxisData = {
        data:xAxis
      }

      echarts1Option.xAxis= xAxisData
      echarts1Option.yAxis= {}
      
      echarts1Option.legend=xAxisData

      echarts1Option.series = []
      xAxis.forEach(key=>{
        echarts1Option.series.push({
          name:key,
          data:orderData.data.map(item=>item[key]),
          type:'line'
        })
      })
    
    echarts1.setOption(echarts1Option)
    });
  },
};
</script>

<style lang="less" scoped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}

.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
  }
  span {
    color: #666666;
    margin-left: 60px;
  }
}

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon {
    font-size: 30px;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      height: 30px;
      line-height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999999;
      text-align: center;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 10px;
  }
}

.graph {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 48%;
  }
}
</style>