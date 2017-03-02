/*
 * 数据浏览
 */
export const REPROTEDREPORT_LIST_GET = 'REPROTEDREPORT_LIST_GET'
export const REPROTEDREPORT_LIST_GET_SUCCESS = 'REPROTEDREPORT_LIST_GET_SUCCESS'
//获取分类(FORM 表格 第一个下拉列表)
export const REPROTEDREPORT_CATG_GET = 'REPROTEDREPORT_CATG_GET'
export const REPROTEDREPORT_CATG_GET_SUCCESS = 'REPROTEDREPORT_CATG_GET_SUCCESS'
//获取分类及其包含任务 (form表格第二个下拉列表)
export const REPROTEDREPORT_CATGS_GET = 'REPROTEDREPORT_CATGS_GET'
export const REPROTEDREPORT_CATGS_GET_SUCCESS = 'REPROTEDREPORT_CATGS_GET_SUCCESS'


//获取分类(FORM 表格 第一个下拉列表)
export function getReportedCatg(result) {
  return {
    type: REPROTEDREPORT_CATG_GET,
  }
}
export function getReportedCatgSuccess(result) {
  return {
    type: REPROTEDREPORT_CATG_GET_SUCCESS,
    result: result
  }
}
export function getReportedCatgList(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/reporting/getReportCatgList.do';

    dispatch(getReportedCatg())
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getReportedCatgSuccess(result))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}

//获取分类及其包含任务 (form表格第二个下拉列表)
export function getReportedCatgs(result) {
  return {
    type: REPROTEDREPORT_CATGS_GET,
  }
}
export function getReportedCatgSuccesss(result) {
  return {
    type: REPROTEDREPORT_CATGS_GET_SUCCESS,
    result: result
  }
}
export function getReportedCatgLists(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/reporting/getReportTaskList.do';

    dispatch(getReportedCatgs())
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getReportedCatgSuccesss(result))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}

//获取列表
export function getReportedReport(result) {
  return {
    type: REPROTEDREPORT_LIST_GET,
    result: result
  }
}
export function getReportedReportSuccess(result) {
  return {
    type: REPROTEDREPORT_LIST_GET_SUCCESS,
    result: result
  }
}
export function getReportedReportList(opts, type) {
  return (dispatch, getState) => {
    var interFace = '/reporting/getReportingReport.do';

    dispatch(getReportedReport())
    return axios.post(interFace, opts)
      .then(function (result) {
        dispatch(getReportedReportSuccess(result))
      }).catch(function (error) {
        console.error("URL: " + interFace)
      })
  }
}














