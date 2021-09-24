package com.bonapp.bonapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.bonapp.bonapp.domain.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, String> {
    /**
     * 根据id查找角色
     *
     * @param id ID
     * @return
     */
    Role findById(Integer id);

    /**
     * 根据名称查找角色
     *
     * @param name 名称
     * @return
     */
    Role findByName(String name);
}
