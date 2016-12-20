import app from 'app.config';
import moment from 'moment';

class AppService {
    constructor($rootScope) {
        // 登陆校验
        this.checkLogin = function(successCall, faildCall) {
            let isLogin = true;
            setTimeout(() => {
                if (isLogin) {
                    successCall && successCall();
                } else {
                    faildCall && faildCall();
                }
            });
        };

        // 时间选择插件配置
        this.dataRangePickerOpt = {
            opens: 'right',
            maxDate: new Date(),
            timePicker: true,
            timePicker24Hour: true,
            ranges: {
                '今天': [moment().hour(0).minute(0), moment()],
                '昨天': [moment().subtract(1, 'days').hour(0).minute(0), moment().subtract(1, 'days').hour(23).minute(59)],
                '最近7天': [moment().subtract(6, 'days').hour(0).minute(0), moment()],
                '最近30天': [moment().subtract(29, 'days').hour(0).minute(0), moment()],
                '本月': [moment().startOf('month'), moment().endOf('month')],
                '上个月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            locale: {
                format: 'YYYY-MM-DD HH:mm',
                applyLabel: '确定',
                cancelLabel: '取消',
                customRangeLabel: '自定义',
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            }
        };
    }
}
AppService.$inject = ['$rootScope'];

app.service('appService', AppService);
