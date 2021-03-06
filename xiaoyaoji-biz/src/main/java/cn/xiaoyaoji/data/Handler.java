package cn.xiaoyaoji.data;

import java.sql.Connection;
import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;

/**
 * @author: zhoujingjie
 * @Date: 16/5/2
 */
@FunctionalInterface
public interface Handler<T> {

    T handle(Connection connection, QueryRunner qr) throws SQLException;
}
