package com.example.tasktracker.controller;

import com.example.tasktracker.model.Task;
import com.example.tasktracker.model.User;
import com.example.tasktracker.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getTasks(Principal principal) {
        // This will be replaced by fetching User entity from the principal
        return taskService.getTasksForUser(new User());
    }

    @PostMapping
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }
}