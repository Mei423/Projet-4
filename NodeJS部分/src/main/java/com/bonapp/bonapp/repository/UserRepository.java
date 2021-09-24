package com.bonapp.bonapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.bonapp.bonapp.domain.User;


@Repository
public interface UserRepository extends JpaRepository<User, String> {
    /**
     * 根据id查找用户
     *
     * @param id ID
     * @return
     */
    User findById(Integer id);

    /**
     * 根据username查找角色
     *
     * @param username 用户名
     * @return
     */
    User findByUsername(String username);
}

