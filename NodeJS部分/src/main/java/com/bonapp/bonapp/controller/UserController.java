package com.bonapp.bonapp.controller;

import javax.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bonapp.bonapp.domain.User;
import com.bonapp.bonapp.vo.JsonResult;

@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    @Autowired
    UserDetailsService userDetailsService;

    /**
     * 获取登录用户信息
     *
     * @param authentication
     * @return
     */
    @GetMapping
    public JsonResult findUserByName(Authentication authentication){
        User principal = (User) authentication.getPrincipal();
        return JsonResult.ok(principal);
    }

}
