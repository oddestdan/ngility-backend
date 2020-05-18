const Issue = require("../models/issue");

exports.issue_create = (req, res, next) => {
  const { name, description = "" } = req.body;
  const issue = new Issue({ name, description });

  issue.save({ new: true }, (err, issue) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(issue); // TODO: json() instead of send()
  });
};

exports.issue_readone = (req, res, next) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(issue);
  });
};

exports.issue_readall = (req, res, next) => {
  Issue.find({}, (err, issues) => {
    if (err) return next(err);
    res.status(200).send(issues);
  });
};

exports.issue_update = (req, res, next) => {
  Issue.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, issue) => {
      if (err) return next(err);
      res.status(200).send(issue);
    }
  );
};

exports.issue_delete = (req, res, next) => {
  Issue.findByIdAndRemove(req.params.id, (err, issue) => {
    if (err) return next(err);
    res.status(200).send(issue);
  });
};
