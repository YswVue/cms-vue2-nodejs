const express = require('express');
const router = express.Router();
// 数据库
let pool = require('../../config/mysql');

/**
 * @apiDefine Authorization
 * @apiHeader {String} Authorization 需在请求headers中设置Authorization: `Bearer ${access_token}`，登录成功返回的access_token。
 */

/**
 * @api {post} /link/ 添加友情链接
 * @apiName InsertLink
 * @apiPermission 后台系统
 * @apiGroup Link
 *
 * @apiUse Authorization
 *
 * @apiBody { String } title 链接标题.
 * @apiBody { String } url 链接的url地址.
 * @apiBody { Number } link_order 排序数字，数字越小越靠前.
 *
 * @apiSampleRequest /link/
 */

router.post("/", async (req, res) => {
    let { title, url, link_order } = req.body;
    const sql = 'INSERT INTO `cms_link` ( title, url, link_order, create_date ) VALUES (?, ?, ?, CURRENT_TIMESTAMP() )';
    let [{ insertId: link_id, affectedRows }] = await pool.query(sql, [title, url, link_order]);
    if (affectedRows === 0) {
        res.json({ status: false, msg: "添加失败！" });
        return;
    }
    res.json({
        status: true,
        msg: "添加成功",
        data: { link_id }
    });
});

/**
 * @api {delete} /link/:link_id 删除指定id的友情链接
 * @apiName RemoveLink
 * @apiPermission 后台系统
 * @apiGroup Link
 *
 * @apiUse Authorization
 *
 * @apiParam { Number } link_id 友情链接id
 *
 * @apiSampleRequest /link/
 */

router.delete('/:link_id', async (req, res) => {
    let { link_id } = req.params;
    // 删除标签
    let delete_sql = 'DELETE FROM `cms_link` WHERE link_id = ?';
    let [{ affectedRows }] = await pool.query(delete_sql, [link_id]);
    if (affectedRows === 0) {
        res.json({
            status: false,
            msg: "删除失败！"
        });
        return;
    }
    res.json({
        status: true,
        msg: "删除成功"
    });
});

/**
 * @api {put} /link/:link_id 编辑友情链接
 * @apiName UpdateLink
 * @apiPermission 后台系统
 * @apiGroup Link
 *
 * @apiUse Authorization
 *
 * @apiParam { Number } link_id 友情链接id
 * @apiBody { String } title 链接标题.
 * @apiBody { String } url 链接的url地址.
 * @apiBody { Number } link_order 排序数字，数字越小越靠前.
 *
 * @apiExample {js} 参数示例:
 * /link/3
 *
 * @apiSampleRequest /link/
 */

router.put('/:link_id', async (req, res) => {
    let { link_id } = req.params;
    let { title, url, link_order } = req.body;
    let sql = 'UPDATE `cms_link` SET title = ?, url = ?, link_order = ? WHERE link_id = ?';
    let [{ affectedRows }] = await pool.query(sql, [title, url, link_order, link_id]);
    if (affectedRows === 0) {
        res.json({
            status: false,
            msg: "修改失败！"
        });
        return;
    }
    res.json({
        status: true,
        msg: "修改成功!",
    });
});

/**
 * @api {post} /link/usable 启用/禁用友情链接
 * @apiName UsableLink
 * @apiPermission 后台系统
 * @apiGroup Link
 *
 * @apiUse Authorization
 *
 * @apiBody { Number } link_id 友情链接id.
 * @apiBody { Number=1,-1 } usable 是否启用。1-启用，-1-禁用。
 *
 * @apiSampleRequest /link/usable
 */
router.post('/usable', async (req, res) => {
    let { link_id, usable } = req.body;
    const sql = 'UPDATE `cms_link` SET usable = ? WHERE link_id = ?';
    let [{ affectedRows }] = await pool.query(sql, [usable, link_id]);
    if (affectedRows === 0) {
        res.json({
            status: false,
            msg: "修改失败！"
        });
        return;
    }
    res.json({
        status: true,
        msg: "修改成功！"
    });
});

module.exports = router;