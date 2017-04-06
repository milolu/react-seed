import app from 'app.config';
import angular from 'angular';
import moment from 'moment';

// 教师列表
app.controller('teacherListCtrl', function($scope, $state, request, neDialog, neTable) {
  let grid = null;
  let def = {
    real_name: '',
    telephone: '',
    province: '',
    city: '',
    area: '',
    teacher_star: 0,
    customer_service_id: '',
    invite_userid: 0,
    aptitude_apply: 0,
    teacher_star_apply: 0,
    card_number: 0,
    communicate_date_s: '',
    communicate_date_e: '',
    communicate_times_s: '',
    communicate_times_e: '',
  };
  $scope.filterOpt = angular.copy(def);
  $scope.rangTime = { startDate: '', endDate: '' };
  $scope.citySel = [];
  request('customerServiceAll', { typesid: 2 }).success((res) => {
    $scope.serviceList = res.rsm.info;
    $scope.serviceList.unshift({ id: '', real_name: '所有客服' });
  });

  $scope.onSearch = function() {
    if ($scope.citySel.length > 0) {
      angular.extend($scope.filterOpt, {
        province: $scope.citySel[0],
        city: $scope.citySel[1],
        area: $scope.citySel[2],
      });
    }
    if ($scope.rangTime.startDate) {
      angular.extend($scope.filterOpt, {
        communicate_date_s: $scope.rangTime.startDate.format('YYYY-MM-DD'),
        communicate_date_e: $scope.rangTime.endDate.format('YYYY-MM-DD'),
        communicate_times_s: $scope.rangTime.startDate.format('HH:mm'),
        communicate_times_e: $scope.rangTime.endDate.format('HH:mm'),
      });
    }
    grid.setHttpData($scope.filterOpt);
  };

  $scope.onReset = function() {
    $scope.filterOpt = angular.copy(def);
    $scope.citySel = [];
    $scope.rangTime = { startDate: '', endDate: '' };
    $scope.onSearch();
  };

  $scope.onDel = function() {
    // neDialog.ask({
    //   content: '确定删除吗？',
    //   yes: (scope, close) => {
    //     close();
    //   }
    // });
  };

  $scope.onEdit = function(event, type, id) {
    // 0:详情 1:资质审核 2:星级审核
    if (angular.isDefined(type) && angular.isDefined(id)) {
      $state.go('index.user.teacher.detail', { id, type });
    }
  };

  grid = neTable.create({
    parent: '#grid',
    scope: $scope,
    http: request('teacherList'),
    httpData: $scope.filterOpt,
    withCheckBox: false,
    columnDefs: [
      { display: 'ID', field: 'id', width: 5 },
      { display: '姓名', field: 'real_name', width: 10 },
      { display: '手机号', field: 'telphone', width: 10 }, {
        display: '所在地',
        field: function(row) {
          return `${row.province} ${row.city} ${row.area}`;
        },
        width: 15
      },
      { display: '星级', field: 'teacher_star', width: 5 },
      { display: '邀请码', field: 'invite_userid', width: 10 },
      { display: '实名认证', field: 'card_number', width: 5 },
      { display: '星级审核', field: 'teacher_star_apply', width: 5},
      { display: '客服', field: 'customer_service_id', width: 5 },
      { display: '用心度', field: 'teacher_evaluation', width: 5 },
      { display: '积分', field: 'integral', width: 5 },
      { display: '资质审核', field: 'aptitude_apply', width: 5 }, {
        display: '操作',
        field: function(rowData) {
          let id = rowData.id;
          let tpl = `<a class="bg-success" ng-click="onEdit($event, 0, ${id})">查看详情</a> `;
          if (rowData.aptitude_apply === '待审核') {
            tpl += `<a class="bg-primary" ng-click="onEdit(onDel, 1, ${id})">资质审核</a>`;
          }
          if (rowData.teacher_star_apply === '待审核') {
            tpl += `<a class="bg-warning" ng-click="onEdit(onDel, 2, ${id})">星级审核</a>`;
          }
          return tpl;
        },
        sort: false,
        width: 15
      },
    ],
    onResHandler: function(resData) {
      return resData.rsm;
    }
  });
});