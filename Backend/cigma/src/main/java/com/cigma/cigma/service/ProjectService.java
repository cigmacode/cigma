package com.cigma.cigma.service;

import com.cigma.cigma.dto.request.ProjectCreateRequest;
import com.cigma.cigma.dto.response.ProjectGetResponse;
import com.cigma.cigma.entity.Project;
import com.cigma.cigma.entity.Team;
import com.cigma.cigma.entity.User;
import com.cigma.cigma.handler.customException.TeamNotFoundException;

import java.util.Optional;

public interface ProjectService {

    ProjectGetResponse save(ProjectCreateRequest projectCreateRequest) throws TeamNotFoundException;

    Optional<Project> findById(Long id);

    void deleteById(Long id);

}
