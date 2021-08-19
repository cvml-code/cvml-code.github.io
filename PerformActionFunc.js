// Get the action checkbox html code
function getActionCheckboxHTMLCode(step_idx, step_to_object_selected_result, step_to_checkbox_selected_index_result,
                                   step_to_object_selected_index_position_result, step_to_object_bbox_result, input) {
    var HTMLCode = "";
    var step_value = input["step_list"][step_idx];
    var id_value_grounding = "grounding-step-" + step_idx;
    var id_value_non_grounding = "non-grounding-step-" + step_idx;
    var add_highlighted_grounding_object_btn = "btn-grounding-step-" + step_idx;
    var add_highlighted_non_grounding_object_btn = "btn-non-grounding-step-" + step_idx;
    var add_bbox_btn_list = [[], [], []];

    if (typeof input["origin_step_to_object"] === "undefined") {
        input["origin_step_to_object"] = [];
    }
    if (typeof input["origin_step_to_object"][step_idx] === "undefined") {
        input["origin_step_to_object"][step_idx] = [];
    }
    // for grounding
    if (typeof input["origin_step_to_object"][step_idx][0] === "undefined") {
        input["origin_step_to_object"][step_idx][0] = [];
    }
    // for non-grounding
    if (typeof input["origin_step_to_object"][step_idx][1] === "undefined") {
        input["origin_step_to_object"][step_idx][1] = [];
    }

    if (typeof input["origin_step_to_checkbox_selected_index_result"] === "undefined") {
        input["origin_step_to_checkbox_selected_index_result"] = [];
    }
    if (typeof input["origin_step_to_checkbox_selected_index_result"][step_idx] === "undefined") {
        input["origin_step_to_checkbox_selected_index_result"][step_idx] = [];
    }
    // for grounding
    if (typeof input["origin_step_to_checkbox_selected_index_result"][step_idx][0] === "undefined") {
        input["origin_step_to_checkbox_selected_index_result"][step_idx][0] = [];
    }
    // for non-grounding
    if (typeof input["origin_step_to_checkbox_selected_index_result"][step_idx][1] === "undefined") {
        input["origin_step_to_checkbox_selected_index_result"][step_idx][1] = [];
    }

    if (typeof input["origin_step_to_object_selected_index_position"] === "undefined") {
        input["origin_step_to_object_selected_index_position"] = [];
    }
    if (typeof input["origin_step_to_object_selected_index_position"][step_idx] === "undefined") {
        input["origin_step_to_object_selected_index_position"][step_idx] = [];
    }
    // for grounding
    if (typeof input["origin_step_to_object_selected_index_position"][step_idx][0] === "undefined") {
        input["origin_step_to_object_selected_index_position"][step_idx][0] = [];
    }
    // for non-grounding
    if (typeof input["origin_step_to_object_selected_index_position"][step_idx][1] === "undefined") {
        input["origin_step_to_object_selected_index_position"][step_idx][1] = [];
    }

    if (typeof step_to_object_selected_result[step_idx] === "undefined") {
        step_to_object_selected_result[step_idx] = [];
    }
    // for grounding
    if (typeof step_to_object_selected_result[step_idx][0] === "undefined") {
        step_to_object_selected_result[step_idx][0] = [];
    }
    // for non-grounding
    if (typeof step_to_object_selected_result[step_idx][1] === "undefined") {
        step_to_object_selected_result[step_idx][1] = [];
    }

    if (typeof step_to_checkbox_selected_index_result[step_idx] === "undefined") {
        step_to_checkbox_selected_index_result[step_idx] = [];
    }
    // for grounding
    if (typeof step_to_checkbox_selected_index_result[step_idx][0] === "undefined") {
        step_to_checkbox_selected_index_result[step_idx][0] = [];
    }
    // for non-grounding
    if (typeof step_to_checkbox_selected_index_result[step_idx][1] === "undefined") {
        step_to_checkbox_selected_index_result[step_idx][1] = [];
    }

    if (typeof step_to_object_selected_index_position_result[step_idx] === "undefined") {
        step_to_object_selected_index_position_result[step_idx] = [];
    }
    // for grounding
    if (typeof step_to_object_selected_index_position_result[step_idx][0] === "undefined") {
        step_to_object_selected_index_position_result[step_idx][0] = [];
    }
    // for non-grounding
    if (typeof step_to_object_selected_index_position_result[step_idx][1] === "undefined") {
        step_to_object_selected_index_position_result[step_idx][1] = [];
    }

    if (typeof step_to_object_bbox_result[step_idx] === "undefined") {
        step_to_object_bbox_result[step_idx] = [];
    }
    // for grounding
    if (typeof step_to_object_bbox_result[step_idx][0] === "undefined") {
        step_to_object_bbox_result[step_idx][0] = [];
    }
    // for non-grounding
    if (typeof step_to_object_bbox_result[step_idx][1] === "undefined") {
        step_to_object_bbox_result[step_idx][1] = [];
    }
    // for important region
    if (typeof step_to_object_bbox_result[step_idx][2] === "undefined") {
        step_to_object_bbox_result[step_idx][2] = [[]];
    }

    var origin_step_to_object = input["origin_step_to_object"][step_idx];
    var step_to_checkbox_selected_index = step_to_checkbox_selected_index_result[step_idx]
    var origin_step_to_object_selected_index_position = input["origin_step_to_object_selected_index_position"][step_idx];
    var object_bbox_results = step_to_object_bbox_result[step_idx];

    HTMLCode += "<p class='step-border'>" + step_value + "</p>"
    HTMLCode += "<HR align=center width='100%' SIZE=1>"
    // for the grounding one
    HTMLCode += "<div align='left' id=" + id_value_grounding + ">";
    HTMLCode += "<p>First Panel: Please select the words that are associated with any part of the image.</p>"
    HTMLCode += "<button type='button' class='btn btn-primary'" + " id=" + add_highlighted_grounding_object_btn + ">" + " Add Selected Words</button>"
    HTMLCode += "</br>"
    HTMLCode += "<ul>";
    for (var ii in origin_step_to_object[0]) {
        var origin_object = origin_step_to_object[0][ii];
        var object_bbox_result = object_bbox_results[0][ii];
        var index_positions = origin_step_to_object_selected_index_position[0][ii];
        var bbox_num = object_bbox_result.length;
        var bbox_btn_id = "btn-grounding-bbox-object-for-step-" + step_idx + "-" + "object-" + ii;
        HTMLCode += "<li>" + "<input type='checkbox' class='action_checkbox' name=" + bbox_btn_id + " value=" + ii;
        if (step_to_checkbox_selected_index[0].includes(ii)) {
            HTMLCode += " checked='checked'"
        }
        var step_value_copy = (' ' + step_value).slice(1);
        var step_value_with_emphasize = step_value_copy.slice(0, index_positions[0]) + "<b>" +
            step_value_copy.slice(index_positions[0], index_positions[1]) + "</b>"  +
            step_value_copy.slice(index_positions[1])
        HTMLCode += " /> " + origin_object;
        HTMLCode += "&nbsp&nbsp&nbsp&nbsp";
        HTMLCode += step_value_with_emphasize;
        HTMLCode += "&nbsp&nbsp&nbsp&nbsp";
        HTMLCode += "<button type='button' class='btn btn-primary'" + " id=" + bbox_btn_id +
            ">" + "Add Bounding Boxes for " + origin_object + "</button>"
        if (bbox_num > 0 ) {
            HTMLCode += "&nbsp&nbsp&nbsp&nbsp" + "&#10004" + "&nbsp&nbsp&nbsp&nbsp" + bbox_num
        }
        HTMLCode += "</li>";
        add_bbox_btn_list[0].push(bbox_btn_id)
        HTMLCode += "</br>"
    }
    HTMLCode += "</ul>"
    HTMLCode += "</div>"
    HTMLCode += "<HR align=center width='100%' SIZE=1>"

    // for the non-grounding one
    HTMLCode += "<div align='left' id=" + id_value_non_grounding + ">";
    HTMLCode += "<p>Second Panel: Please select the words that are important but not associated with any part of the image.</p>"
    HTMLCode += "<button type='button' class='btn btn-primary'" + " id=" + add_highlighted_non_grounding_object_btn + ">" + " Add Selected Words</button>"
    HTMLCode += "</br>"
    HTMLCode += "<ul>";
    for (var ii in origin_step_to_object[1]) {
        var origin_object = origin_step_to_object[1][ii];
        var index_positions = origin_step_to_object_selected_index_position[1][ii];
        var bbox_btn_id = "btn-bbox-object-for-step-" + step_idx + "-" + "object-" + ii;
        HTMLCode += "<li>" + "<input type='checkbox' class='action_checkbox' name=" + bbox_btn_id + " value=" + ii;
        if (step_to_checkbox_selected_index[1].includes(ii)) {
            HTMLCode += " checked='checked'"
        }
        var step_value_copy = (' ' + step_value).slice(1);
        var step_value_with_emphasize = step_value_copy.slice(0, index_positions[0]) + "<b>" +
            step_value_copy.slice(index_positions[0], index_positions[1]) + "</b>"  +
            step_value_copy.slice(index_positions[1])
        HTMLCode += " /> " + origin_object;
        HTMLCode += "&nbsp&nbsp&nbsp&nbsp";
        HTMLCode += step_value_with_emphasize;
        HTMLCode += "&nbsp&nbsp&nbsp&nbsp";
        HTMLCode += "</li>";
        add_bbox_btn_list[1].push(bbox_btn_id)
        HTMLCode += "</br>"
    }
    HTMLCode += "</ul>"
    HTMLCode += "</div>"
    var bbox_btn_id = "btn-bbox-important-object-for-step-" + step_idx ;
    var important_object_bbox_result = object_bbox_results[2][0];
    var bbox_num = important_object_bbox_result.length;
    HTMLCode += "<HR align=center width='100%' SIZE=1>"

    HTMLCode += "<div align='left'>";
    HTMLCode += "<p>Last Panel: Please annotate any important parts of the image that are not mentioned in the sentence.</p>";
    HTMLCode += "<button type='button' class='btn btn-primary'" + " id=" + bbox_btn_id +
            ">" + "Add New Regions</button>";
    if (bbox_num > 0 ) {
        HTMLCode += "&nbsp&nbsp&nbsp&nbsp" + "&#10004" + "&nbsp&nbsp&nbsp&nbsp" + bbox_num
    }
    HTMLCode += "</div>"
    HTMLCode += "<HR align=center width='100%' SIZE=1>"
    add_bbox_btn_list[2].push(bbox_btn_id)
    return [HTMLCode, add_highlighted_grounding_object_btn, add_highlighted_non_grounding_object_btn, add_bbox_btn_list];
}
